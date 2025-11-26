import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

interface TaskItemProps {
    task: {id: string; text: string; done: boolean};
    onToggle: (id: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({task, onToggle}) => {
    return (
        <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.container}>
            <Text style={[styles.text, task.done && styles.done]}>{task.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderColor: '#6b6262ff',
        borderWidth: 1,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
    },
    done: {
        textDecorationLine: 'line-through',
        color: '#999',
    },
});

export default TaskItem;