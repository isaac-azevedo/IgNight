import React, {useState, useEffect} from 'react';
import { 
          StyleSheet, 
          View, 
          Text, 
          TextInput, 
          Platform,
          FlatList,
          
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData{
  id: string;
  name: string;
  date?: Date;
}

export function Home(){

  const [newSkill, setNewSkill] = useState('');  
  const [mySkills, setMySkills] = useState<SkillData[]>([]);  
  const [gretting, setGretting] = useState('');


function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data])
}


function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
    skill => skill.id !== id
  ))
};


useEffect(() => {
  const currentHour = new Date().getHours();

  if( currentHour < 12 ){
          setGretting('Good Morning!')
      }else if(currentHour >= 12 && currentHour < 18){
          setGretting('Good Afternoon!')
      }else{
          setGretting('Good Evening!')
  }
}, [])


  return(
    <View style={styles.container}>

      <Text style={styles.title}>Welcome Isaac</Text>

      <Text style={styles.greetings}>
            { gretting }
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#c3c3c3"
        onChangeText={setNewSkill}
      />

      <Button 
        title="Add"
        onPress={handleAddNewSkill}
        />

      <Text style={[styles.title, {marginVertical: 50}]}>
            My Skills
      </Text>


    <FlatList 
      data={mySkills}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}//precisa do id
            />
      )}
    />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    greetings: {
      color: '#fff',
    }
})