<template>
    <Page>
        <ActionBar  backgroundColor="#53ba82">
          <NavigationButton text="Atraz" color="white" android.systemIcon="ic_menu_back" @tap="back()"/>
            <Label fontSize="20" :text="datain.name"/>
        </ActionBar>

        <GridLayout rows="*,*,*,*" columns="*,*" width="100%" height="100%" padding="7" backgroundColor="rgba(83, 186, 130, 0.6)">
           <GridLayout row="0" rowSpan="4" colSpan="2" class="coverImage" col="0" width="50%" height="30%"
               backgroundImage="~/assets/images/logo.png" horizontalAlignment="center" verticalAlignment="middle">
             </GridLayout>

            <GridLayout v-if="p1!=null" row="0" col="0" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p1.img" @tap="to(p1)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p1.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p1.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
              <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
             <Label v-if="p1.stock>0" :text="'Stock : '+p1.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>

            <GridLayout v-if="p2!=null" row="0" col="1" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p2.img" @tap="to(p2)">
                  <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p2.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p2.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
                    <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
              <Label v-if="p2.stock>0" :text="'Stock : '+p2.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>

          <GridLayout v-if="p3!=null" row="1" col="0" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p3.img" @tap="to(p3)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p3.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p3.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
                    <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
             <Label v-if="p3.stock>0" :text="'Stock : '+p3.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>

          <GridLayout v-if="p4!=null" row="1" col="1" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p4.img" @tap="to(p4)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p4.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p4.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
                    <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
             <Label v-if="p4.stock>0" :text="'Stock : '+p4.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>
          
        <GridLayout v-if="p5!=null" row="2" col="0" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p5.img" @tap="to(p5)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p5.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p5.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout>  
          <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
            <Label v-if="p5.stock>0" :text="'Stock : '+p5.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>
          
        <GridLayout v-if="p6!=null" row="2" col="1" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p6.img" @tap="to(p6)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p6.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p6.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
           <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
            <Label v-if="p6.stock>0" :text="'Stock : '+p6.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>
          
        <GridLayout v-if="p7!=null" row="3" col="0" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p7.img" @tap="to(p7)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p7.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p7.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
            <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
            <Label v-if="p7.stock>0" :text="'Stock : '+p7.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>
          
        <GridLayout v-if="p8!=null" row="3" col="1" class="coverImage bounceIn1"  rows="*,*,*" columns="*"  margin="4"
            borderRadius="10%"   :backgroundImage="p8.img" @tap="to(p8)">
                   <GridLayout borderRadius="0 0 10 10"   row="2" rows="*" columns="*,auto" backgroundColor="rgba(0, 0, 0, 0.7)" >
                     <Label row='0' col="0" margin="5" :text="p8.name" fontSize="12" textWrap="true"  color="white" verticalAlignment="middle" textAlignment="center" ></Label>
                     <Label row='0' col="1"  :text="p8.price+' Bs.'" fontSize="16"   color="white" verticalAlignment="middle" textAlignment="right" marginRight="5" fontWeight="bold"   ></Label>
                    </GridLayout> 
                    <Label class="info" row="0" fontSize="22" horizontalAlignment="right" color="tomato" margin="5">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf217; "/> 
                </FormattedString>
            </Label> 
            <Label v-if="p8.stock>0" :text="'Stock : '+p8.stock" row="0" fontSize="12"  horizontalAlignment="left" color="black" margin="5" > </Label> 
             <Label v-else class="info" row="0" fontSize="15" fontWeight="bold" horizontalAlignment="left" color="tomato" margin="5" text="Agotado"></Label> 
            </GridLayout>

        </GridLayout>
    </Page>
</template>

<script>
import Home from "./Home"; 
import producto_modal  from "./producto_modal"; 
  export default { 
    props: ["datain"], 
    data() {
            return {
                p1:null, 
                p2:null, 
                p3:null, 
                p4:null, 
                p5:null, 
                p6:null, 
                p7:null, 
                p8:null,
                group:'/'
              };
        },
     methods: { 
           to(datainn){
              this.$showModal(producto_modal, {
                    props: { 
                         datas:datainn
                    }
                }).then((data)=>{
                   
                        if (typeof data != 'undefined') {
                           
                        }else{
                            
                        }
                });
           },
           back(){
            this.$returnTo(this,Home);
           },
           onValueEvent(result){   
                this.p1=result.value.p1;
                this.p2=result.value.p2;
                this.p3=result.value.p3;
                this.p4=result.value.p4;
                this.p5=result.value.p5;
                this.p6=result.value.p6;
                this.p7=result.value.p7;
                this.p8=result.value.p8; 
            } 
        },
    mounted(){ 
    let me =this; 
     
    setTimeout(() => {  
          me.$firebase.addValueEventListener(me.onValueEvent, me.datain.path).then(
            function(listenerWrapper) { 
            me.$pathlistener = listenerWrapper.path; 
            me.group=me.datain.path; 
            me.$listeners = listenerWrapper.listeners;  
            }
          );
    }, 1000);
    }
  };
</script>
 
