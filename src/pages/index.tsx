import { Button } from 'antd';
import { Socket } from 'dgram';
import type { NextPage } from 'next';
import Router from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

let streamOption = {
  video: {
    facingMode: 'environment',
  },
  audio: {
    autoGainControl: false,
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
  },
};
const Home: NextPage = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const [context, setContext] = useState<AudioContext>();
  const [isMic, setMic] = useState<boolean>(false);

  const [socket, setSocket] = useState<any>();

  const connectWS = useCallback(() => {
    const socket = io('https://dev-api.sakurajob.jp', {
      transports: ['websocket'],
      auth: {
        participantId: '12345',
        room: 'roomName',
        isCandidate: String(false),
      },
    });

    console.log('newSocket', socket);
    setSocket(socket);
  }, []);

  useEffect(() => {
    connectWS();
  }, [connectWS]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (!socket) return;

      if (document.visibilityState === 'visible') {
        if (!socket.connected) {
          socket.connect();
        }
      } else {
        socket.disconnect();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange, false);
  }, [socket]);

  console.log('socket===', socket);

  useEffect(() => {
    async function root() {
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        streamOption
      );

      setMediaStream(mediaStream);
    }

    root();
  }, []);

  useEffect(() => {
    if (!mediaStream) return;

    const audioContext = new AudioContext({
      latencyHint: 'interactive',
    });

    setContext(audioContext);
  }, [mediaStream]);

  useEffect(() => {
    async function root() {
      if (!context || !mediaStream || typeof window === 'undefined') return;

      await context.audioWorklet.addModule('/recorderWorkletProcessor.js');

      const tmpInput = context.createMediaStreamSource(mediaStream);

      const tmpProcessor = new window.AudioWorkletNode(
        context,
        'recorder.worklet'
      );

      tmpProcessor.connect(context.destination);
      tmpInput.connect(tmpProcessor);

      tmpProcessor.port.onmessage = (e) => {
        const audioData = e.data;
        console.log('audioData', audioData);
      };
    }

    root();

    return () => {
      if (context && context.state !== 'closed') {
        context.close();
      }

      if (mediaStream) {
        const tracks = mediaStream.getTracks();

        tracks.forEach(function (track) {
          track.stop();
        });
      }
    };
  }, [context]);

  useEffect(() => {
    if (!context || context.state === 'closed') return;

    if (isMic) {
      context.resume();
    } else {
      context.suspend();
    }
  }, [isMic, context]);

  return (
    <div>
      <Button onClick={() => setMic((prev) => !prev)}>CLick</Button>
      <Button onClick={() => Router.push('/job')}>CLick</Button>
    </div>
  );
};

export default Home;
