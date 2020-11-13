import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { globalStyles } from '../../styles/GlobalStyles'
import CustomButton from './../../shared/customButton';
import { useGuruContext } from '../../contexts/GuruContext';


const TambahGuru = ({ setModalOpen }) => {
    
    const { dispatch } = useGuruContext()

    const addGuruSchema = yup.object({
     nip: yup.string()
         .required('NIP Wajib Diisi')
         .min(9, 'NIP Harus 9 Karakter'),
     nama: yup.string()
        .required('Nama Tidak Boleh Kosong')
    })

    const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
       }

    return (
        <View style={globalStyles.container}>
        <Formik
          initialValues={{nip: '', nama: ''}}
          validationSchema={addGuruSchema}
          onSubmit={(values, actions) => {
            values.key = uuid()
            dispatch({type: 'ADD_GURU', values})
            console.log(values)
            actions.resetForm()
        
          }}
        >
        {props => (
          <View>
            <TextInput 
             style={globalStyles.input}
             placeholder='Masukkan NIP..'
             onChangeText={props.handleChange('nip')}
             onBlur={props.handleBlur('nip')} 
             value={props.values.nip}
             keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.nip && props.errors.nip}</Text>
            <TextInput 
             style={globalStyles.input}
             placeholder='Masukkan Nama..'
             onChangeText={props.handleChange('nama')}
             onBlur={props.handleBlur('nama')}
             value={props.values.nama}
            />
            <Text style={globalStyles.errorText}>{props.touched.nama && props.errors.nama}</Text>

          <CustomButton onPress={props.handleSubmit} text='Submit' />
          </View>
        )}

           
        </Formik>
      </View>
    )
}

export default TambahGuru
