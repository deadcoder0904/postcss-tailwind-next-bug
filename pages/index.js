import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hello <span className="text-blue-600">Next.js!</span>
        </h1>
        <pre className="sxfsiq9 sxfsiq91hogf--theme-pink sxfsiq9-5lq5p">
          <code>
            <div
              data-line={1}
              className="highlight-line"
              data-highlighted="true"
            >
              <span className="token keyword">import</span> React{' '}
              <span className="token keyword">from</span>{' '}
              <span className="token string">'react'</span>
              <span className="token punctuation">;</span>
              {'\n'}
            </div>
            <div
              data-line={2}
              className="highlight-line"
              data-highlighted="true"
            >
              {'\n'}
            </div>
            <div
              data-line={3}
              className="highlight-line"
              data-highlighted="true"
            >
              <span className="token keyword">export</span>{' '}
              <span className="token keyword">function</span>{' '}
              <span className="token function">Counter</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">
                <span className="token punctuation">{'{'}</span> initialCount{' '}
                <span className="token operator">=</span>{' '}
                <span className="token number">0</span>{' '}
                <span className="token punctuation">{'}'}</span>
              </span>
              <span className="token punctuation">)</span>{' '}
              <span className="token punctuation">{'{'}</span>
              {'\n'}
            </div>
            <div
              data-line={4}
              className="highlight-line"
              data-highlighted="true"
            >
              {'  '}
              <span className="token keyword">const</span>{' '}
              <span className="token punctuation">[</span>count
              <span className="token punctuation">,</span> setCount
              <span className="token punctuation">]</span>{' '}
              <span className="token operator">=</span> React
              <span className="token punctuation">.</span>
              <span className="token function">useState</span>
              <span className="token punctuation">(</span>initialCount
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              {'\n'}
            </div>
            <div
              data-line={5}
              className="highlight-line"
              data-highlighted="true"
            >
              {'  '}
              <span className="token keyword">return</span>{' '}
              <span className="token punctuation">(</span>
              {'\n'}
            </div>
            <div
              data-line={6}
              className="highlight-line"
              data-highlighted="true"
            >
              {'    '}
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;</span>button
                </span>{' '}
                <span className="token attr-name">type</span>
                <span className="token attr-value">
                  <span className="token punctuation attr-equals">=</span>
                  <span className="token punctuation">"</span>button
                  <span className="token punctuation">"</span>
                </span>{' '}
                <span className="token attr-name">onClick</span>
                <span className="token script language-javascript">
                  <span className="token script-punctuation punctuation">
                    =
                  </span>
                  <span className="token punctuation">{'{'}</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">)</span>{' '}
                  <span className="token operator">=&gt;</span>{' '}
                  <span className="token function">setCount</span>
                  <span className="token punctuation">(</span>
                  <span className="token punctuation">(</span>
                  <span className="token parameter">prevCount</span>
                  <span className="token punctuation">)</span>{' '}
                  <span className="token operator">=&gt;</span> prevCount{' '}
                  <span className="token operator">+</span>{' '}
                  <span className="token number">1</span>
                  <span className="token punctuation">)</span>
                  <span className="token punctuation">{'}'}</span>
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              <span className="token plain-text" />
              {'\n'}
            </div>
            <div
              data-line={7}
              className="highlight-line"
              data-highlighted="true"
            >
              <span className="token plain-text">{'      '}</span>
              <span className="token punctuation">{'{'}</span>count
              <span className="token punctuation">{'}'}</span>
              <span className="token plain-text" />
              {'\n'}
            </div>
            <div
              data-line={8}
              className="highlight-line"
              data-highlighted="true"
            >
              <span className="token plain-text">{'    '}</span>
              <span className="token tag">
                <span className="token tag">
                  <span className="token punctuation">&lt;/</span>button
                </span>
                <span className="token punctuation">&gt;</span>
              </span>
              {'\n'}
            </div>
            <div
              data-line={9}
              className="highlight-line"
              data-highlighted="true"
            >
              {'  '}
              <span className="token punctuation">)</span>
              <span className="token punctuation">;</span>
              {'\n'}
            </div>
            <div
              data-line={10}
              className="highlight-line"
              data-highlighted="true"
            >
              <span className="token punctuation">{'}'}</span>
              {'\n'}
            </div>
          </code>
        </pre>
      </main>
    </div>
  )
}
