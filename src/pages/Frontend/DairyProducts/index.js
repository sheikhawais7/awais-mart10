import React from 'react'
import Card from '../../../components/Card'
import img1 from '../../../assets/chesse.png'
import img2 from '../../../assets/cream.png'
import img3 from '../../../assets/milk.png'
import img4 from '../../../assets/butter.png'
import img5 from '../../../assets/buttermilk.png'
import img6 from '../../../assets/yogurt.png'
import img7 from '../../../assets/cottagecheese.png'
import img8 from '../../../assets/custard.png'
import img9 from '../../../assets/poweredmilk.png'

export default function DairyProducts() {
  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h1>Dairy Products</h1>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <Card img={img1} price="4.00" brand="Cheese" product_name="Cheese is a type of dairy product produced in a range of flavors, textures, and forms by coagulation of the milk protein casein." />
          <Card img={img2} price="4.00" brand="Cream" product_name="Cream is a dairy product composed of the higher-fat layer skimmed from the top of milk before homogenization." />
          <Card img={img3} price="4.00" brand="Milk" product_name="Milk is a white liquid food produced by the mammary glands of mammals. " />
          <Card img={img4} price="4.00" brand="Butter" product_name="Butter is a dairy product made from the fat and protein components of churned cream. " />
          <Card img={img5} price="4.00" brand="Buttermilk" product_name="Buttermilk is a fermented dairy drink. Traditionally, it was the liquid left behind after churning butter out of cultured cream." />
          <Card img={img6} price="4.00" brand="Yogurt" product_name="Yogurt is a food produced by bacterial fermentation of milk. Fermentation of sugars in the milk by these bacteria produces lactic acid." />
          <Card img={img7} price="4.00" brand="Cottage cheese" product_name="Cottage cheese is a curdled milk product with a mild flavour and a creamy, heterogeneous, soupy texture, made from skimmed milk." />
          <Card img={img8} price="4.00" brand="Custard" product_name="Custard is a variety of culinary preparations based on sweetened milk, cheese, or cream cooked with egg or egg yolk to thicken it." />
          <Card img={img9} price="4.00" brand="Powdered Milk" product_name="Powdered milk, also called milk powder, dried milk, or dry milk, is a manufactured dairy product made by evaporating milk to dryness." />
        </div>
      </div>
    </>
  )
}
