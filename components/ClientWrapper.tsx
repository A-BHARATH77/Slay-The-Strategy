'use client';
import dynamic from 'next/dynamic';

export const ModalContact = dynamic(() => import('./ModalContact'), { ssr: false });
export const Expertises = dynamic(() => import('./Expertises'), { ssr: false });
export const Clients = dynamic(() => import('./Clients'), { ssr: false });
