import Head from 'next/Head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
        <div className='main-container text-white' style={{marginLeft:'35%', marginRight: '35%', marginTop:'2%'}}>
          <div className='flex justify-center p-2 rounded-xl' style={{backgroundColor:'#313134'}}>Hello, I'm an physicist and developer based in Brazil!</div>
          <div className='about-me'>
            <h1 className='underline decoration-gray-500 font-bold text-2xl my-2 underline-offset-4' style={{textDecorationThickness:'4px', textDecorationColor:'#525252'}}>About me</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;I'm an <a className='underline decoration-indigo-500 decoration-2'>backend developer and physicist</a> based in Brazil, I have a passion for building products using <a className='underline decoration-indigo-500 decoration-2'>artificial intelligence</a> that can be useful for the daily life to become easier and more enjoyable. I believe that <a className='underline decoration-indigo-500 decoration-2'>knowledge is everyone's right</a>, so the majority of my codes is <a className='underline decoration-indigo-500 decoration-2'>totally open source.</a></p>
            <div className='text-center'><a href='/works' className='button-portfolio inline-block py-2.5 px-6 bg-indigo-500 rounded-lg' style={{marginTop:'2%'}}>My portfolio</a></div>
          </div>
          <div className='articles'>
            <h1 className='underline decoration-gray-500 font-bold text-2xl my-2 underline-offset-4' style={{textDecorationThickness:'4px', textDecorationColor:'#525252'}}>Articles</h1>
            <div className='article-item'>
              <span className='article-date'>2022.01.01</span>
              <span className='article-title'><a className='article-link' href='/'>Test test test.</a></span>
            </div>
            <div className='article-item'>
              <span className='article-date'>2022.01.01</span>
              <span className='article-title'><a className='article-link' href='/'>Test test test.</a></span>
            </div>
          </div>
          <div className='bio'>
            <h1 className='underline decoration-gray-500 font-bold text-2xl my-2 underline-offset-4' style={{textDecorationThickness:'4px', textDecorationColor:'#525252'}}>Bio</h1>
            <span className='font-bold mr-4'>2001</span><a>Born in Porto Alegre, Brazil.</a><br />
            <span className='font-bold mr-4'>2022</span><a>Started Physhics Degree at University of Rio Grande do Sul.</a>
          </div>
        </div>
    </>
  )
}