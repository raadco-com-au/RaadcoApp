import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class ContactUs extends Component {
    render() {
        return (

                <Content>
                    <Card>
       
                        <CardItem>
                           
                            <Body style={{marginBottom:30}}>
                                    <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                    <Text style={{justifyContent:"space-evenly",fontWeight:"bold",fontSize:18}}>RAADCO PTY LTD </Text>
                                    </Text> 
                                    <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                    25/422-426 Peats Ferry Road, Asquith, Sydney, NSW 2077
                                     </Text>
                                    <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                    Mobile:+61 426 661 691
                                     </Text>
                                     <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                     ABN : 13 615 030 772
                                     </Text>
                            </Body>
                           
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require("../images/map.png")} style={{ height: 200,flex:1,width:null }} />
                        </CardItem>
                    </Card>
                </Content>
       
        );
    }
}

export default ContactUs;