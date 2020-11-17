<template>
    <Page>
        <ActionBar  backgroundColor="#53ba82">
            <Label fontSize="20" text="SUPERMERCADO NATURA"/>
             <ActionItem ios.position="right">
                 <GridLayout v-if="$control.cart.length>0" class="bounceIn1" width="65" rows="*" columns="*" horizontalAlignment="center" verticalAlignment="middle" @tap="toCart()">
                     <Label class="info fas" row="0" fontSize="25" text.decode="&#xf217; "
                     horizontalAlignment="right" color="white" margin="5"> </Label> 
                     <Label class="fas" row="0" fontSize="15" :text="$control.cart.length" width="25" height="25" borderWidth="0.7" borderColor="white" textAlignment="center" marginTop="5" marginRight="6"
                     horizontalAlignment="right" verticalAlignment="top" backgroundColor="red" borderRadius="100" color="white" padding="5"> </Label>
                 </GridLayout>
            </ActionItem>
        </ActionBar>

        <GridLayout rows="*,*,*,*" columns="*" width="100%" height="100%" padding="7" backgroundColor="rgba(83, 186, 130, 0.6)">
           <GridLayout row="0" rowSpan="4" class="coverImage" col="0" width="50%" height="30%"
               backgroundImage="~/assets/images/logo.png" horizontalAlignment="center" verticalAlignment="middle">
             </GridLayout>

            <GridLayout row="0" class="coverImage bounceIn1" col="0" rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   backgroundImage="~/assets/images/carnes.jpg" @tap="toCarnes()">
                   <GridLayout borderRadius="0 0 10 10" marginTop="15" row="2" rows="*" columns="*" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' text="CARNES" fontSize="18"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                    </GridLayout> 
            </GridLayout>

            <GridLayout row="1" class="coverImage bounceIn1" col="0" rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"  backgroundImage="~/assets/images/frutas.jpg" @tap="toFrutas()">
              <GridLayout borderRadius="0 0 10 10" marginTop="15" row="2" rows="*" columns="*" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' text="FRUTAS" fontSize="18"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
               </GridLayout> 
            </GridLayout>

            <GridLayout row="2" class="coverImage bounceIn1" col="0" rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%" backgroundImage="~/assets/images/verduras.jpg" @tap="toVerduras()">
            <GridLayout borderRadius="0 0 10 10" marginTop="15" row="2" rows="*" columns="*" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' text="VERDURAS" fontSize="18"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
               </GridLayout> 
            </GridLayout>

            <GridLayout row="3" class="coverImage bounceIn1" col="0" rows="*,*,*" columns="*"   margin="4"
            borderRadius="10%"  backgroundImage="~/assets/images/abarrotes.jpg" @tap="toAbarrotes()">
             <GridLayout borderRadius="0 0 10 10" marginTop="15" row="2" rows="*" columns="*" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' text="ABARROTES" fontSize="18"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
               </GridLayout> 
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script>
import productos from "./productos"; 
import view from "./view";
  export default { 
    
     methods: { 
          toCart(){
             console.log(this.$control.cart)
          },
           toCarnes(){
             this.$To(this,view,{name:'Sección CARNES',path:'/carnes'});
           },
           toFrutas(){
             this.$To(this,view,{name:'Sección FRUTAS',path:'/frutas'});
           },
           toVerduras(){
             this.$To(this,view,{name:'Sección VERDURAS',path:'/verduras'});
           },
           toAbarrotes(){
             this.$To(this,view,{name:'Sección ABARROTES',path:'/abarrotes'});
           }
        },
    mounted(){ 
    let me =this;   
    setTimeout(() => {  
        me.$firebase.removeEventListeners(
          me.$control.listeners, me.$control.pathlistener
        );
    }, 1000);
    }
  };
</script>
 
