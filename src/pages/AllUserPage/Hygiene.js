import React from 'react'
import { motion } from 'framer-motion'
import { animationTwo, transition } from '../../components/animations/index'

const Hygiene = () => {
    return (
      <motion.div  initial="out" animate="in" exit="out" variants={animationTwo} transition={transition} >
        <div className="navbar_for_others" >
  
        </div>
        <div className='container main_hygiene'>
      <div className='row p-4'>
  
        <div className='col-md-12 col-lg-12 col-xl-7 hygine_css'>
          <h1  >Covid-19 Önlemleri</h1>
          <ul >
            <li>Tesis içerisine maskesiz giriş yapılamayacaktır. Ancak Salgın Yönetimi ve Çalışma Rehberi uyarınca egzersiz sırasında maske takılması zorunlu değildir.</li>
            <li>Salona  giriş ve çıkışlarına el dezenfektanları yerleştirilmiştir. El ile dezenfeksiyon işlemi sağlandıktan sonra kulübe giriş yapılabilecektir.</li>
            <li>Salon  girişinde ayakkabılar değiştirilecek ve temiz ayakkabı ile hijyen paspasında dezenfekte edildikten sonra spor salonuna giriş sağlanacaktır.         </li>
            <li>Salonumuz  Salgın Yönetimi ve Çalışma Rehberi esasınca metrekare olarak yeterli  büyüklüğe sahiptir.Tüm derslerimiz  randevulu şekilde yapılmaktadır.   </li>
            <li>Serbest ağırlık bölümü ve fonksiyonel  çalışma alanı  ve  MMA  kafes  alanları sosyal mesafeye  uygun  yerleşmiştir.</li>
            <li>Tüm serbest  ağırlık ekipmanlarının kullanımı öncesi dezenfekte edilebilmesi için el antiseptiklerinin sayısı daha da artırılarak kolay ulaşılabilecek noktalara yerleştirilmiştir.</li>
            <li>Tüm salon ve  ekipmanlar açılış öncesi profesyonel ekiplerce baştan sona dezenfekte edilmiştir.</li>
            <li>Salonumuz  belirli  aralıklarla  havalandırılmaktadır.</li>
            <li>Soyunma odalarımızı sizlere daha iyi ve daha hijyenik koşullarda hizmet verebilmek için baştan sona yenilenmiştir.</li>
            <li>Soyunma odalarında kullanılan dolaplar sosyal mesafe kuralı gereğince birer boşluk bırakılarak kullanıma açılacaktır.</li>
            <li>Soyunma odaları içerisinde tüm dolaplar temizlik görevlilerimiz tarafından periyodik olarak dezenfekte edilecektir. Ancak dolap kullanacak üyelerimizin de,   kullanım öncesinde soyunma odalarına yerleştirdiğimiz dezenfektanlarla dolap içlerini dezenfekte edebileceğini hatırlatmak isteriz.</li>
            <li>Dolapların güvenlik ve hijyen kuralları gereği her kullanımdan sonra boşaltılması gerektiğini hatırlatırız.</li>
        
          </ul>
        </div>
        <div className='col-md-12 col-lg-12 col-xl-5'>
          <div className=''>
            <section className='container bolum9'>
              <div className='row '>
                <div className='col-md-6 col-lg-6'>
                  <div className='etiket'>
                    <div className='img d-flex justify-content-start align-items-end  first1 '></div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='etiket'>
                    <div className='img d-flex justify-content-start align-items-end  second1'></div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='etiket'>
                    <div className='img d-flex justify-content-start align-items-end  third1'></div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='etiket'>
                    <div className='img d-flex justify-content-start align-items-end  fourth1'></div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='etiket'>
                    <div className='img d-flex justify-content-start align-items-end  fifth1'></div>
                  </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                  <div className='etiket'>
                    <div className='img d-flex justify-content-start align-items-end  six1'></div>
                  </div>
                </div>
            
              </div>
            </section>
          </div>
        </div>
   
      </div>
      <div className="forSpace2" ></div>
    </div>
        </motion.div>
    )
}

export default Hygiene
