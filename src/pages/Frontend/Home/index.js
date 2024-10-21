import React from 'react'
import Card from '../../../components/Card'
import img1 from '../../../assets/Mushrooms.png'
import img2 from '../../../assets/apple.png'
import img3 from '../../../assets/milk.png'
import img4 from '../../../assets/nature_s_home_mushroom.png'
import img5 from '../../../assets/BellPeppers.png'
import img6 from '../../../assets/mango.png'
import img7 from '../../../assets/potatoes.png'
import img8 from '../../../assets/butter.png'
import img9 from '../../../assets/rice_stick.png'

export default function Home() {
  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h1>Online grocery store Faisalabad</h1>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <Card img={img2} price="4.00" brand="Apple" product_name="An apple is a round, edible fruit produced by an apple tree.Apples come in hundreds of color and flavor varieties. " />
          <Card img={img1} price="4.00" brand="Mushrooms" product_name="A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source." />
          <Card img={img3} price="4.00" brand="Milk" product_name="Milk is a white liquid food produced by the mammary glands of mammals. " />
          <Card img={img4} price="4.00" brand="Nature's Home Mushrooms Whole - 400gm" product_name="Mushrooms are a rich, low-calorie source of fiber, protein, and antioxidants. They may also help to lessen the risk of developing serious health conditions, such as Alzheimer's, heart disease, cancer, and diabetes." />
          <Card img={img5} price="4.00" brand="Bell peppers" product_name="The bell pepper is the fruit of plants in the Grossum Group of the species Capsicum annuum." />
          <Card img={img6} price="4.00" brand="Mango" product_name="A mango is an edible stone fruit produced by the tropical tree Mangifera indica.It is the King of all Fruits" />
          <Card img={img7} price="4.00" brand="Potatoes" product_name="The potato is a starchy root vegetable native to the Americas that is consumed as a staple food in many parts of the world." />
          <Card img={img8} price="4.00" brand="Butter" product_name="Butter is a dairy product made from the fat and protein components of churned cream. " />
          <Card img={img9} price="4.00" brand="Suree Rice Sticks 3mm - 400gm" product_name="Sticky rice is low in fat and contains no cholesterol, making it a heart-healthy food choice. Its consumption can help maintain healthy cholesterol levels and reduce the risk of heart disease." />          
        </div>
      </div>
    </>
  )
}
