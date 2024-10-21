import React from 'react'
import Card from '../../../components/Card'
import img1 from "../../../assets/sugar.png"
// import img1 from '../../../assets/sugar.png'
import img2 from '../../../assets/mezan_-_mezan_cooking_oil.png'
import img3 from '../../../assets/falak_rice.png'
import img4 from '../../../assets/daal_moong_washed_500g_.png'
import img5 from '../../../assets/al-khubz_fine_aata_10kg_1.png'
import img6 from '../../../assets/national_salt.png'
import img7 from '../../../assets/daalMasoor.png'
import img8 from '../../../assets/daalChana.png'
import img9 from '../../../assets/national_turmeric_powder.png'
import img10 from '../../../assets/national_garam_masala_powder_50g.png'
import img11 from '../../../assets/national_chili_powder.png'
import img12 from '../../../assets/monte_sweet_corn.png'
import img13 from '../../../assets/nature_s_home_mushroom.png'
import img14 from '../../../assets/rice_stick.png'
import img15 from '../../../assets/green_cardamom.png'
import img16 from '../../../assets/spaghetti.png'
import img17 from '../../../assets/supreme_oil.png'
import img18 from '../../../assets/shan_biryani.png'
import img19 from '../../../assets/dashi_chicken_powder.png'
import img20 from '../../../assets/zeera_whole.png'
import img21 from '../../../assets/bake_parlor.png'

export default function GeoceryItems() {
  return (
    <>
    <div className="backImg">
      <div className="animation">
        <h1>Grocery Items</h1>
      </div>
    </div>

    <div className="container">
        <div className="row my-5">
          <Card img={img1} price="4.00" brand="Sugar - 1kg" product_name="Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food." />
          <Card img={img2} price="4.00" brand="Mezan Cooking Oil - 1Ltr" product_name="Mezan Cooking Oil and Canola Oil are powered by Tocopherol that helps to improve your Immune System." />
          <Card img={img3} price="4.00" brand="Falak Bachat Long Grain Rice - 1kg" product_name="Falak Bachat is export quality long grain rice. It is great for everyday dishes like daal chawal, vegetable rice and more." />
          <Card img={img4} price="4.00" brand="Daal Moong (Washed) - 500gm" product_name="Daal Moong high fiber content helps in preventing constipation and bloating. " />
          <Card img={img5} price="4.00" brand="Al-Khubz Fine Atta - 10kg" product_name="Atta or chakki atta is a wholemeal wheat flour, carefully selected premium wheat, processed on state-of-the-art Buhler Plants, rich in minerals." />
          <Card img={img6} price="4.00" brand="National Salt Iodized Refined - 800gm" product_name=" National iodized Refined salt is a specially refined; brilliant white food grade salt with free flow properties.It contain iodine." />
          <Card img={img7} price="4.00" brand="Daal Masoor (Big) - 500gm" product_name="Masoor dal or split red lentil is a rich source of vitamin A, C and E. These vitamins are essential for maintaining healthy eyesight and vision. " />
          <Card img={img8} price="4.00" brand="Daal Chana (Medium) - 500gm" product_name=" Chana dal is a rich source of protein, B-complex vitamins, iron, magnesium, potassium, and zinc. " />
          <Card img={img9} price="4.00" brand="National Turmeric Powder - 100gm" product_name="Dried and freshly ground turmeric Powder is often used in most Pakistani dishes.There are no additives and chemicals used in the manufacturing process." />
          <Card img={img10} price="4.00" brand="National Garam Masala Powder - 50gm" product_name="National Garam Masala Powder adds sweetness, pepper adds heat, nutmeg adds complexity, coriander makes it a touch lemony and adds texture." />
          <Card img={img11} price="4.00" brand="National Chilli Powder - 100gm" product_name="Chilli Powder is one such spice that you will see in every Pakistani kitchen. The dried and powdered form of red chili adds a rich flavor and spice kick to the food." />
          <Card img={img12} price="4.00" brand="Del Monte Whole Kernel Sweet Corn - 420gm" product_name="Corn has a naturally sweet flavor without added sweeteners and works great as a stand-alone side dish or as a delicious ingredient in multiple applications." />
          <Card img={img13} price="4.00" brand="Nature's Home Mushrooms Whole - 400gm" product_name="Mushrooms are a rich, low-calorie source of fiber, protein, and antioxidants. They may also help to lessen the risk of developing serious health conditions, such as Alzheimer's, heart disease, cancer, and diabetes." />
          <Card img={img14} price="4.00" brand="Suree Rice Sticks 3mm - 400gm" product_name="Sticky rice is low in fat and contains no cholesterol, making it a heart-healthy food choice. Its consumption can help maintain healthy cholesterol levels and reduce the risk of heart disease." />
          <Card img={img15} price="4.00" brand="Green Cardamom (Elaichi) - 50gm" product_name="Green Cardamom (Elaichi) aids digestion, helps control blood pressure, and can even alleviate morning sickness. Additionally, it's rich in antioxidants, which can help boost the immune system." />
          <Card img={img16} price="4.00" brand="Kolson Spaghetti Box - 450gm" product_name="Kolson Spaghetti made from the finest durum wheat, ensuring a high-quality pasta with excellent flavor. Maintains an ideal texture after cooking, with a firm bite that complements sauces beautifully." />
          <Card img={img17} price="4.00" brand="Soya Supreme Cooking Oil Bottle - 5Ltr" product_name="Soya Supreme oil is a popular cooking oil that has maintained an important place in kitchens around the world. In addition to its availability and affordable price tag." />
          <Card img={img18} price="4.00" brand="Shan Biryani - 90gm" product_name="Shan Biryani Mix helps you in preparing the traditional Biryani at home with the authentic taste and aroma for an ultimate food experience." />
          <Card img={img19} price="4.00" brand="Dashi Flavoured Chicken Zaiqa Powder - 100gm" product_name="Zaiqa Powder is a combination of salt, starch, maltodextrin, sugar, and a curated selection of spices and flavors creates a robust and well-balanced taste profile." />
          <Card img={img20} price="4.00" brand="Zeera Whole - 100gm" product_name="Jeera whole or also known as cumin seeds have the earthy, rich, slightly smoky flavor that can be sprinkled on almost any dish, enhancing the taste and bringing the crunchy feeling." />
          <Card img={img21} price="4.00" brand="Bake Parlor Fine Atta - 10kg" product_name="Fine atta is also sold in my region of Pakistan, different from maida. It's whiter than chakki atta, but not as white as maida." />
        </div>
      </div>
  </>
  )
}
