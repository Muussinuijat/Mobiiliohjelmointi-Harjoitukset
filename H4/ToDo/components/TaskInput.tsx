import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

type TaskInputProps = {
    onAddTask: (taskText: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState<string>('');

    const handleSave = () => {
        if (taskText.trim()) {
            onAddTask(taskText.trim());
            setTaskText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter new task"
                value={taskText}
                onChangeText={setTaskText}
                returnKeyType='done'
                onSubmitEditing={handleSave}
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#666',
    },
    button: {
        backgroundColor: '#046dc4ff',
        paddingHorizontal: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TaskInput;