import Title from "../src/components/Title";

import Contents from "../src/components/contents";

import  Button  from "@mui/material/Button";

function Home() {

  return (
  <div>



    <Title heading="DIME DRIP" subheading="Dime Drip is a very nice website"/>
    <Contents details="Dime Drip is a very helpful website"/>


    <br/>



    <Title heading="UCU" subheading="UCU is a very nice website"/>
    <Contents details="UCU is a very good University."/>



    <br/>



    <Title heading="VICTORIA UNIVERSITY" subheading="VICTORIA UNIVERSITY is a very nice website"/>
    <Contents details="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>



    <br/>

    <Button variant="text" >Proceed</Button>
    <Button variant="contained" disabled >Proceed</Button>


    
    <Button variant="outlined" >Proceed</Button>




  </div>
  );
};



export default Home;