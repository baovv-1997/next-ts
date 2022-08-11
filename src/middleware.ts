import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axiosIns from './services/axios';

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(request.url);
}

export const config = {
  matcher: ['/middle'],
};
