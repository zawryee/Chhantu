import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button, ListItem, Icon} from 'react-native-elements'
import colorValue from '../../Shared/commoStyle/ColorValue'
import { commonJustify, commonStyle } from '../../Shared/commoStyle/CommonStyle'
import fontValue from '../../Shared/commoStyle/FontValue'

const ProfileScreen = () => {
  return (
    <View>
      <View style={[commonJustify.rowCenter,{marginVertical:20}]}><Avatar
        size={100}
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        containerStyle={{ backgroundColor: colorValue.primary }}
      /></View>
      <View><Text style={[commonStyle({fontSize:25, color:colorValue.liteDark}).text,commonJustify.textCenter]}>HK Lalfakzuala</Text></View>
      <View style={[commonJustify.rowCenter,{marginVertical:20}]}>
        <Icon name='map'/>
      <Text style={[commonStyle({fontSize:15, color:colorValue.liteDark}).text,commonJustify.textCenter]}>Lunglei</Text>
      </View>

      <View style={[commonJustify.rowSpaceEvenly,{marginVertical:20}]}>
        <Button buttonStyle={{ backgroundColor: colorValue.info }} title="Call Now" />
        <Button buttonStyle={{ backgroundColor: colorValue.primary }} title="Request" />
      </View>

      <View style={commonJustify.rowSpaceEvenly}>
        <View style={styles.card}>
          <Text style={[commonStyle({ fontSize: 24, fontFamily: fontValue.PoninsBold }).text, { textAlign: 'center' },]}>A+</Text>
          <Text style={[commonStyle({ fontSize: 14, fontFamily: fontValue.PoppinsRegular }).text, { textAlign: 'center' },]}>Blood Type</Text>
        </View>
        <View style={styles.card}>
          <Text style={[commonStyle({ fontSize: 24, fontFamily: fontValue.PoninsBold }).text, { textAlign: 'center' },]}>05</Text>
          <Text style={[commonStyle({ fontSize: 14, fontFamily: fontValue.PoppinsRegular }).text, { textAlign: 'center' },]}>Donated</Text>
        </View>
        <View style={styles.card}>
          <Text style={[commonStyle({ fontSize: 24, fontFamily: fontValue.PoninsBold }).text, { textAlign: 'center' },]}>02</Text>
          <Text style={[commonStyle({ fontSize: 14, fontFamily: fontValue.PoppinsRegular }).text, { textAlign: 'center' },]}>Requested</Text>
        </View>
      </View>

      {/* <View>
        {List.map((item, i) => (
            <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron/>
            </ListItem>
          ))}
      </View> */}

      <View style={{marginVertical:20}}>
        <ListItem>
          <Icon name="inbox" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Available for donation</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="trash-can-outline" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Invite friend</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="trash-can-outline" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Get Help</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem>
          <Icon name="trash-can-outline" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Sign Out</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>

    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorValue.white,
    padding: 10
  }
})

// const list = [
//   {
//     title: 'Available for donation',
//     icon: 'av-timer'
//   }
// ]