import React from 'react'

const Second = () => {
  return (
    <>
    <h1 className='heading'>Education</h1>
    <div className='second'>

    <div className='block'>
      <div className='content'>
          <div className='photo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/IIIT_Bhubaneswar_1.jpg/1280px-IIIT_Bhubaneswar_1.jpg" alt="" />
          </div>
          <h3 style={{ color: "cyan" }}>B.Tech ( I.T )</h3>
          <h4>UNIVERSITY : IIIT BBSR</h4>
          <p>Currently pursuing a Bachelor’s degree in Information Technology , at IIIT Bhubaneswar.</p>
        </div>
      </div>

      <div className='block'>
      <div className='content'>
          <div className='photo'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMv_2FGNTYUMenTyP6tF6S85H53zOOUhyUbA&s" alt="" />
          </div>
          <h3 style={{ color: "cyan" }}>Class 12 (87%)</h3>
          <h4>SCHOOL : K.V No.1 , BBSR</h4>
          <p>Completed Class 12 in the Science stream with subjects including Physics, Chemistry, Biology, and Mathematics.</p>
        </div>
      </div>

      <div className='block'>
      <div className='content'>
          <div className='photo'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKu0r88DX0TpYHpGECaVF8dcWCdeE1Y841QA&s" alt="" />
          </div>
          <h3 style={{ color: "cyan" }}>Class 10 (91%)</h3>
          <h4>SCHOOL : K.V No.1 , BBSR</h4>
          <p>Completed Class 10 with a focus on core subjects such as Mathematics, Science, Social Studies, and English</p>
        </div>
      </div>

      
      
    </div>
    </>
  )
}

export default Second
