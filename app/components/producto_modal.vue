<template>
    <StackLayout  backgroundColor="white"    width="100%"> 
          <Label verticalAlignment="center" textAlignment="center" margin="20px" fontWeight="bold" :text="datas.name" textWrap="true"  fontSize="20px"/>
            <StackLayout width="100%" class="lineBreak" marginBottom="5"/> 
            
              <GridLayout v-if="datas.stock>0"  columns="*,2*" rows="auto" paddingLeft="15" paddingRight="15" >
                      <Label  color="black" textAlignment="center"
                       verticalAlignment="center" fontSize="16"  col="0" row="0"   text="Cantidad : "  ></Label>  
                      <ListPicker col="1" row="0"  :items="cantidades" height="20%" 
                        @selectedIndexChange="selectedIndexChanged" />
                  </GridLayout>
                 
                 <GridLayout  v-if="datas.stock>0" columns="*,*" rows="auto,auto" paddingLeft="15" paddingRight="15" >
                     <Label   color="black" textAlignment="right" fontWeight="bold"
                       verticalAlignment="center" fontSize="16" padding="3" col="0" row="0"   text="Precio : "></Label>  
                    <Label   color="black" textAlignment="left"
                       verticalAlignment="center" fontSize="16" padding="3" col="1" row="0"   :text="datas.price+' Bs.'"></Label>  
                 
                     <Label   color="black" textAlignment="right" fontWeight="bold"
                       verticalAlignment="center" fontSize="16" padding="3" col="0" row="1"   text="Subtotal : "></Label>  
                    <Label   color="black" textAlignment="left"
                       verticalAlignment="center" fontSize="16" padding="3" col="1" row="1"   :text="subtotal+' Bs.'"></Label>  
                  </GridLayout>
                  <GridLayout  v-else columns="*,*" rows="auto,auto" paddingLeft="15" paddingRight="15" >
                     <Label   color="tomato" textAlignment="center" fontWeight="bold"
                       verticalAlignment="center" fontSize="16" padding="3" col="0" row="0"   text="Agotado"></Label>  
                      
                  </GridLayout>
 
                 <GridLayout   columns="*,*" rows="auto"  >
                      <Label v-if="datas.stock>0" backgroundColor="rgba(83, 186, 130, 0.9)" width="100%"  margin="2"  color="white" textAlignment="center"
                       verticalAlignment="center" fontSize="16" padding="8" col="0" row="0"   text="Agregar" @tap="registrar()"></Label>  
                      
                       <Label backgroundColor="tomato" width="100%"  margin="2"  color="white" textAlignment="center"
                       verticalAlignment="center" fontSize="16" padding="8" col="1" row="0"   text="Cancelar" @tap="$modal.close()"></Label> 
                </GridLayout>
    </StackLayout>
</template>

<script> 
    export default {
        props: ["datas","grupo"] ,
         data() {
            return {
                cantidades:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
                subtotal:0,
                cant:0
              };
        },
        methods:{
             selectedIndexChanged(eve) {  
                this.cant=eve.value+1;
                this.subtotal=this.$control.roundTo(this.datas.price*this.cant, 2)
            } ,
            registrar(){
              this.$control.cart.push({grupo:this.grupo,value:this.datas,cant:this.cant,total:this.subtotal});
            }
        }
    };
</script>
 <style>
 
.lineBreak {
        height: 0.8;
        border: none;  
        color:#048ba8;
        background-color: #048ba8;
    } 
.category-icon2 {
        text-align: center;
        
        color: white;
        border-color: white;
        vertical-align: center;
        font-size: 13;
        border-width: 1;
        border-radius:10%; 
        width: 45;
        height: 35;
    } 
     
</style>