import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      search: '',
    }
  }

  updateSearch = (search) => {
    this.setState({search})
  }



  retrieveStories=()=>{
     try {
        var allStories= []
        var stories = db.collection("stories") .get().then((querySnapshot)=> {
           querySnapshot.forEach((doc)=> { 
             // doc.data() is never undefined for query doc snapshots
              allStories.push(doc.data())
               console.log('this are the stories',allStories) })
               this.setState({allStories}) }) } 
               catch (error)
               { console.log(error); } };


  
  searchFilter=()=>{
    var dataSource= [];
    var enteredText = text.split("")
    var text = text.toUpperCase();


    if (enteredText[0].toUpperCase() ==='B'){
      const searches =  await db.collection("stories").where('Author','==',text).get()
      allSearches.docs.map((doc)=>{
        this.setState({
          allSearches:[...this.state.allSearches,doc.data()],
          lastVisibleStory: doc
        })
      })
    }

    else if(enteredText[0].toUpperCase() === 'S'){
      const searches = await db.collection('stories').where('Title','==',text).get()
      allSearches.docs.map((doc)=>{
        this.setState({
          allSearches:[...this.state.allStories,doc.data()],
          lastVisibleSearch: doc
        })
      })
    }
    
  }


  componentDidMount = async ()=>{
    const query = await db.collection("stories").limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allSearches: [],
        lastVisibleSearch: doc
      })
    })
  }


    render(){
      const{search} = this.state;

        return(
            <View style={styles.container}>
                <Text>Read Story</Text>

                <SearchBar
                placeholder= "Type here"
                onChangeText={this.updateSearch}
                value={search}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});