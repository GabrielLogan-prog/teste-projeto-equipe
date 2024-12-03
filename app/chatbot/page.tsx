'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default function RedirectToChatbot() {
  const router = useRouter();

  useEffect(() => {
    const randomId = uuidv4();
    router.push(`/chatbot/${randomId}`);
  }, [router]);

  return null;
}
