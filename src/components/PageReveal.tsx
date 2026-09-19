'use client';

import { Fragment, useEffect, useState, type ReactNode } from 'react';

const PAGE_REVEAL_EVENT = 'tarokiki:page-reveal';

/** 重复点击当前导航项时重新挂载内容，让显现动画重新播放。 */
export function PageReveal({ children }: { children: ReactNode }) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const replay = () => setAnimationKey((current) => current + 1);

    window.addEventListener(PAGE_REVEAL_EVENT, replay);
    return () => window.removeEventListener(PAGE_REVEAL_EVENT, replay);
  }, []);

  return <Fragment key={animationKey}>{children}</Fragment>;
}

export { PAGE_REVEAL_EVENT };
