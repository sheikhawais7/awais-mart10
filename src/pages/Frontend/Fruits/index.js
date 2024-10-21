import React from 'react'
import Card from '../../../components/Card'
import img1 from '../../../assets/mango.png'
import img2 from '../../../assets/banana.png'
import img3 from '../../../assets/apple.png'
import img4 from '../../../assets/appricot.png'
import img5 from '../../../assets/orange.png'
import img6 from '../../../assets/cherry.png'
import img7 from '../../../assets/grapes.png'
import img8 from '../../../assets/blueberry.png'
import img9 from '../../../assets/strawberry.png'
import img10 from '../../../assets/Pears.png'
import img11 from '../../../assets/Pineapple.png'
import img12 from '../../../assets/watermelon.png'
import img13 from '../../../assets/blackberry.png'
import img14 from '../../../assets/Guava.png'
import img15 from '../../../assets/Lemon.png'

export default function Fruits() {
  return (
    <>
      <div className="backImg">
        <div className="animation">
          <h1>Fruits</h1>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <Card img={img1} price="4.00" brand="Mango" product_name="A mango is an edible stone fruit produced by the tropical tree Mangifera indica.It is the King of all Fruits" />
          <Card img={img2} price="4.00" brand="Banana" product_name="A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. " />
          <Card img={img3} price="4.00" brand="Apple" product_name="An apple is a round, edible fruit produced by an apple tree.Apples come in hundreds of color and flavor varieties. " />
          <Card img={img4} price="4.00" brand="Apricot" product_name="An apricot is a fruit, or the tree that bears the fruit, of several species in the genus Prunus. " />
          <Card img={img5} price="4.00" brand="Oranges" product_name="The orange, also called sweet orange to distinguish it from the bitter orange, is the fruit of a tree in the family Rutaceae." />
          <Card img={img6} price="4.00" brand="Cherry" product_name="A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe." />
          <Card img={img7} price="4.00" brand="Grape" product_name="A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis." />
          <Card img={img8} price="4.00" brand="Blueberry" product_name="Blueberry is a widely distributed and widespread group of perennial flowering plants with blue or purple berries. " />
          <Card img={img9} price="4.00" brand="Strawberry" product_name="The garden strawberry is a widely grown hybrid species of the genus Fragaria in the rose family, Rosaceae, collectively known as the strawberries." />
          <Card img={img10} price="4.00" brand="Pears" product_name="Pears are from the same family as apples but are softer. They can be yellow, green, reddish or brown." />
          <Card img={img11} price="4.00" brand="Pineapple" product_name="The pineapple is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae." />
          <Card img={img12} price="4.00" brand="Watermelon" product_name="Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit." />
          <Card img={img13} price="4.00" brand="Blackberry" product_name="The blackberry is an edible fruit produced by many species in the genus Rubus in the family Rosaceae." />
          <Card img={img14} price="4.00" brand="Guava" product_name="Guava is a common tropical fruit cultivated in many tropical and subtropical regions." />
          <Card img={img15} price="4.00" brand="Lemon" product_name="The lemon is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia." />
        </div>
      </div>
    </>
  )
}
