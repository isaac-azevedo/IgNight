import React from 'react';
import { 
    StyleSheet,
    Text, 
    TouchableOpacity,
    TouchableOpacityProps
     } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
          <TouchableOpacity 
                    style={styles.skillButton}
                    {...rest }
                    >
                    <Text style={styles.skillText}>
                        {skill}
                    </Text>
            </TouchableOpacity>
          
  )
}

const styles = StyleSheet.create({
    skillButton: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 6,

    },
    skillText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
}
})
