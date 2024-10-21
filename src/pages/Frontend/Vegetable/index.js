import React from 'react'
import Card from '../../../components/Card'
import img1 from '../../../assets/carrot.png'
import img2 from '../../../assets/onion.png'
import img3 from '../../../assets/BrusselSprouts.png'
import img4 from '../../../assets/Mushrooms.png'
import img5 from '../../../assets/potatoes.png'
import img6 from '../../../assets/BellPeppers.png'
import img7 from '../../../assets/GreenPeas.png'
import img8 from '../../../assets/beets.png'
import img9 from '../../../assets/cucumber.png'
import img10 from '../../../assets/pumpkins.png'
import img11 from '../../../assets/tomato.png'
import img12 from '../../../assets/corn.png'
import img13 from '../../../assets/Eggplant.png'
import img14 from '../../../assets/StringBeans.png'
import img15 from '../../../assets/RainbowRadish.png'


export default function Vegetable() {
  return (
    <>
    <div className="backImg">
      <div className="animation">
        <h1>Vegetable</h1>
      </div>
    </div>

    <div className="container">
        <div className="row my-5">
          <Card img={img1} price="4.00" brand="Carrots" product_name="The carrot (Daucus carota subsp. sativus) is a root vegetable, typically orange in color, though heirloom variants including purple, black, red, white." />
          <Card img={img2} price="4.00" brand="Onions" product_name="Onion is characterized by its distinct flavour and pungency which are due to various sulphur compounds." />
          <Card img={img3} price="4.00" brand="Brussels sprouts" product_name="Eating a lot of Brussels sprouts and other cruciferous veggies may help protect against cancers of the stomach, lungs, kidney, breast, bladder, and prostate." />
          <Card img={img4} price="4.00" brand="Mushrooms" product_name="A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source." />
          <Card img={img5} price="4.00" brand="Potatoes" product_name="The potato is a starchy root vegetable native to the Americas that is consumed as a staple food in many parts of the world." />
          <Card img={img6} price="4.00" brand="Bell peppers" product_name="The bell pepper is the fruit of plants in the Grossum Group of the species Capsicum annuum." />
          <Card img={img7} price="4.00" brand="Green peas" product_name="Green peas are fairly low in calories and contain several vitamins, minerals and antioxidants." />
          <Card img={img8} price="4.00" brand="Beets" product_name="Beets contain a high concentration of nitrates, which can help lower your blood pressure levels. This may lead to a reduced risk of heart disease and stroke." />
          <Card img={img9} price="4.00" brand="Cucumber" product_name="Cucumber is a nutritious fruit with a high water content. Eating cucumber may help lower blood sugar, prevent constipation, and support weight loss." />
          <Card img={img10} price="4.00" brand="Pumpkin" product_name="Pumpkin is not a rich source of protein at just 1.8 grams per cup. You may wish to add fresh or canned pumpkin to protein-rich meals or smoothies." />
          <Card img={img11} price="4.00" brand="Tomato" product_name="The tomato Solanum lycopersicum, is a plant whose fruit is an edible berry that is eaten as a vegetable." />
          <Card img={img12} price="4.00" brand="Corn" product_name="Corn is a healthy grain and source of fiber, vitamins, minerals, and antioxidants." />
          <Card img={img13} price="4.00" brand="Eggplant" product_name="Eggplant is a high-fiber, low-calorie food that is rich in nutrients and comes with many potential health benefits." />
          <Card img={img14} price="4.00" brand="String beans" product_name="Green beans, string beans, or snap beans are a rich source of vitamins A, C, and K, and of folic acid and fiber. " />
          <Card img={img15} price="4.00" brand="Rainbow radish" product_name="Radishes are high in potassium, which can help lower your blood pressure." />
        </div>
      </div>
  </>
  )
}
