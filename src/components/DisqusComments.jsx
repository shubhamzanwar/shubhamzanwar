'use client';

import { useEffect } from 'react';

export default function DisqusComments({ identifier, url }) {
  useEffect(() => {
    window.disqus_config = function () {
      this.page.identifier = identifier;
      this.page.url = url;
    };
    if (window.DISQUS) {
      window.DISQUS.reset({ reload: true });
    } else {
      const script = document.createElement('script');
      script.src = 'https://shubhamzanwarblog.disqus.com/embed.js';
      script.setAttribute('data-timestamp', String(Date.now()));
      document.body.appendChild(script);
    }
  }, [identifier, url]);

  return <div id="disqus_thread" />;
}
