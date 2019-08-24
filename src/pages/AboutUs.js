import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class AboutUs extends Component {
    render() {
        return (

                <Content>
                    <Card>
                        
                        <CardItem cardBody>
                            <Image source={require("../images/logo.png")} style={{ height: 200,resizeMode:"contain",flex:1,width:null }} />
                        </CardItem>
                        <CardItem>
                           
                            <Body style={{marginBottom:30}}>
                                    <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                    <Text style={{justifyContent:"space-evenly",fontStyle:"italic",fontWeight:"bold"}}>Raadco </Text>
                                     is a full service web development company that focuses on the delivering to our customers the right tools and solutions to sell and add value to your business. Raadco's approach to web design is not just about attention grabbing aesthetics, but about functionality, ensuring that visitors to your site can navigate with ease and intent.
                                    </Text>
                                    <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                    All Raadco designed and developed websites are completely unique, catered toward our clients overall marketing goals and objectives. By focusing on the overall marketing strategy and goals when building a website, the final product ensures that you will see an increase in website traffic and returning customers.
                                    </Text>
                                    <Text style={{justifyContent:"space-evenly",marginBottom:10}}>
                                    Our creative department employs the most current design trends that target your potential customers in order to create positive customer experiences with your website.
                                    </Text>
                            </Body>
                           
                        </CardItem>
                    </Card>
                </Content>
       
        );
    }
}

export default AboutUs;