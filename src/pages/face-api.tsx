import * as faceapi from 'face-api.js';
import * as canvas from 'canvas';
import { useEffect, useState } from 'react';

import { Upload } from 'antd';
const { Dragger } = Upload;

// faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

const TINY_FACE_DETECTOR = 'tiny_face_detector';
const SSD_MOBILENETV1 = 'ssd_mobilenetv1';
const selectedFaceDetector = SSD_MOBILENETV1;

// ssd_mobilenetv1 options
const minConfidence = 0.5;

// tiny_face_detector options
const inputSize = 512;
const scoreThreshold = 0.5;

const Index = () => {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [file, setFile] = useState<any>(null);

  const getCurrentFaceDetectionNet = () => {
    if (selectedFaceDetector === SSD_MOBILENETV1) {
      return faceapi.nets.ssdMobilenetv1;
    }
    if (selectedFaceDetector === TINY_FACE_DETECTOR) {
      return faceapi.nets.tinyFaceDetector;
    }
  };

  const isFaceDetectionModelLoaded = () => {
    return !!getCurrentFaceDetectionNet()?.params;
  };

  const loadModels = async () => {
    if (!isFaceDetectionModelLoaded()) {
      await getCurrentFaceDetectionNet()?.load('/models');
    }

    const MODEL_URL = '/models';
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    setModelsLoaded(true);
  };

  useEffect(() => {
    loadModels();
  }, []);

  const getFaceDetectorOptions = () => {
    return selectedFaceDetector === SSD_MOBILENETV1
      ? new faceapi.SsdMobilenetv1Options({ minConfidence })
      : new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold });
  };

  const detectEmotion = (detection: any) => {
    if (!detection) return;
    const expressions = detection.expressions;

    let value = 0;
    let type = '';
    if (value < expressions.surprised) {
      type = 'surprised';
      value = expressions.surprised;
    }
    if (value < expressions.disgusted) {
      type = 'disgusted';
      value = expressions.disgusted;
    }
    if (value < expressions.fearful) {
      type = 'fearful';
      value = expressions.fearful;
    }
    if (value < expressions.sad) {
      type = 'sad';
      value = expressions.sad;
    }
    if (value < expressions.angry) {
      type = 'angry';
      value = expressions.angry;
    }
    if (value < expressions.happy) {
      type = 'happy';
      value = expressions.happy;
    }
    if (value < expressions.neutral) {
      type = 'neutral';
      value = expressions.neutral;
    }

    console.log('type', type);
  };

  const runFaceExpression = async () => {
    const input = document.getElementById('myImg') as any;

    const options = getFaceDetectorOptions();
    const detection = await faceapi
      .detectSingleFace(input)
      .withFaceExpressions();

    detectEmotion(detection);
    console.log('detection', detection);
    // const result = await faceapi
    //   .detectSingleFace('', options)
    //   .withFaceExpressions();
  };

  useEffect(() => {
    if (!modelsLoaded) return;
    runFaceExpression();
  }, [modelsLoaded]);

  // const handleChangeFile = async (info: any) => {
  //   try {
  //   } catch (e) {
  //     console.log('ex', e);
  //   }
  //   const image = await faceapi.bufferToImage(info.file);
  //   const canvas = faceapi.createCanvasFromMedia(image);

  //   const detections = await faceapi
  //     .detectSingleFace(image)
  //     .withFaceLandmarks();

  //   console.log('detections', detections);
  // };

  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }

  //   console.log('file', file);
  // }, [file]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <div className="w-[500px] h-[300px]">
        <Dragger className="w-full h-full">
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div> */}
      <img id="myImg" src="/images/sad.jpg" />
      <canvas id="myCanvas" />
    </div>
  );
};

export default Index;
