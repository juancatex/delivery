<template>
    <Page>
        <ActionBar >
          <NavigationButton text="Atraz" color="white" android.systemIcon="ic_menu_back" @tap="to()"/>



            <Label text="Productos"/>
        </ActionBar>

        <GridLayout>
            <Label class="info">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf060; "/>
                    <Span text="estoy en productossss"/>
                </FormattedString>
            </Label>
            <Button  marginTop="15"   
                    class="btn-rounded-lg"  backgroundColor="#0c00ff" height="38" width="120" 
                     horizontalAlignment="center"
                    variant="outline" @tap="to" fontSize="15px">
                            <FormattedString> 
                                <Span text="go to productos"></Span>            
                            </FormattedString> 
                </Button> 
        </GridLayout>
    </Page>
</template>

<script>
import Home from "./Home"; 
  export default {
   
     methods: { 
       to(){
         this.$returnTo(this,Home);
       },
            onValueEvent(result){   
                 console.log("Event type: " + result.type);
    console.log("Keys: " + result.key);
    console.log("Value: " + result.value);
    console.log("Value: " + JSON.stringify(result.value));
            }  
        },
    mounted(){

let me =this;  
    
setTimeout(() => { 
     me.$popup.success({
  title: "Awesome",
  message: "That was great!"
});
  this.$firebase.addValueEventListener(me.onValueEvent, "/").then(
    function(listenerWrapper) { 
      me.$control.setpathlistener(listenerWrapper.path); 
      me.$control.setlisteners(listenerWrapper.listeners);  
    }
  ); 

 me.$firebase.setValue(
      '/carnes',
      {
        p1:{id:1,name:'Carne Molida Especial Natura Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154508-250x250.jpg',stock:150,price:29.90},
        p2:{id:2,name:'Costilla Natura Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154501-250x250.jpg',stock:15,price:23.90},
        p3:{id:3,name:'Asado Cuadrado Natura Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154493-250x250.jpg',stock:18,price:45.90},
        p4:{id:4,name:'Cabeza De Lomo Natura Especial Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154495-250x250.jpg',stock:15,price:51.90},
        p5:{id:5,name:'Cadera Natura Especial Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154496-250x250.jpg',stock:21,price:51.90},
        p6:{id:6,name:'Colita Cuadril Al Vacio Natura Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154513-250x250.jpg',stock:15,price:65},
        p7:{id:7,name:'Filete Al Vacio Natura Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154514-250x250.jpg',stock:150,price:79.90},
        p8:{id:8,name:'Bistec Natura Especial Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/80154498-250x250.jpg',stock:50,price:45.90} 
      }
  );
  me.$firebase.setValue(
      '/frutas',
      {
        p1:{id:9,name:'Chirimoya Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020012-250x250.jpg',stock:150,price:36.40},
        p2:{id:10,name:'Frutilla Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020034-250x250.jpg',stock:150,price:34.90},
        p3:{id:11,name:'Kiwi Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020117-250x250.jpg',stock:150,price:30},
        p4:{id:12,name:'Limon Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020049-250x250.jpg',stock:150,price:19.20},
        p5:{id:13,name:'Mandarina Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020058-250x250.jpg',stock:150,price:4.80},
        p6:{id:14,name:'Manga Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020061-250x250.jpg',stock:150,price:19.60},
        p7:{id:15,name:'Manzana Royal Gala Por Unidad',img:'https://www.ketal.com.bo/image/cache/catalog/product/80178377-250x250.jpg',stock:150,price:3},
        p8:{id:16,name:'Platano Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33020111-250x250.jpg',stock:150,price:5.60} 
      }
  );

  me.$firebase.setValue(
      '/verduras',
      {
        p1:{id:17,name:'Acelga Por Amarro',img:'https://www.ketal.com.bo/image/cache/catalog/product/33040020-250x250.jpg',stock:50,price:3.60},
        p2:{id:18,name:'Apio Por Amarro',img:'https://www.ketal.com.bo/image/cache/catalog/product/80178352-250x250.jpg',stock:50,price:3},
        p3:{id:19,name:'Arveja Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33010055-250x250.jpg',stock:50,price:20.40},
        p4:{id:20,name:'Beterraga Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33010065-250x250.jpg',stock:50,price:6.40},
        p5:{id:21,name:'Brocoli Grande Por Unidad',img:'https://www.ketal.com.bo/image/cache/catalog/product/80178353-250x250.jpg',stock:50,price:9},
        p6:{id:22,name:'Carote Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33010090-250x250.jpg',stock:50,price:9.20},
        p7:{id:23,name:'Haba Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33010165-250x250.jpg',stock:50,price:9},
        p8:{id:24,name:'Lechuga Repollada Por Kilo',img:'https://www.ketal.com.bo/image/cache/catalog/product/33010590-250x250.jpg',stock:50,price:8.40} 
      }
  );

 me.$firebase.setValue(
      '/abarrotes',
      {
        p1:{id:25,name:'Aceite Fino Vegetal 1.8 Lt',img:'https://www.ketal.com.bo/image/cache/catalog/product/1060135-250x250.jpg',stock:50,price:22.60},
        p2:{id:26,name:'Arroz Caisy Grano De Oro 1Kg',img:'https://www.ketal.com.bo/image/cache/catalog/product/3010227-250x250.jpg',stock:50,price:10.50},
        p3:{id:27,name:'Fideo Don Vitorio Espirales 400Gr',img:'https://www.ketal.com.bo/image/cache/catalog/product/18011125-250x250.jpg',stock:50,price:5.90},
        p4:{id:28,name:'Fideo La Estrella 400Gr',img:'https://www.ketal.com.bo/image/cache/catalog/product/18010534-250x250.jpg',stock:50,price:4.90},
        p5:{id:30,name:'Maiz Pipoca Bloch 400Gr',img:'https://www.ketal.com.bo/image/cache/catalog/product/80169581-250x250.jpg',stock:50,price:10.90},
        p6:{id:31,name:'Trigo Grano De Oro Pelado 1000Gr',img:'https://www.ketal.com.bo/image/cache/catalog/product/80141876-250x250.jpg',stock:50,price:20.60},
        p7:{id:32,name:'Pimientas Andes Negra Molida 20 Gr',img:'https://www.ketal.com.bo/image/cache/catalog/product/14011820-250x250.jpg',stock:50,price:6.30},
        p8:{id:33,name:'Sopa Maruchan Pollo Picante Vaso 64Gr',img:'https://www.ketal.com.bo/image/cache/catalog/product/31026061-250x250.jpg',stock:50,price:6.20} 
      }
  );

}, 2000);
    }
  };
</script>

<style >
  
   
</style>
