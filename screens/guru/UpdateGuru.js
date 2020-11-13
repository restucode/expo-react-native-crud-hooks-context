import React from 'react'
import { 
    View, Text, TextInput,
    Keyboard, TouchableWithoutFeedback
} from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import { Formik } from 'formik'
import * as yup from 'yup'
import CustomButton from './../../shared/customButton'
import { useGuruContext } from './../../contexts/GuruContext'

const UpdateGuru = ({route, navigation}) => {
    const { dispatch } = useGuruContext()
    const { key, nama, nip } = route.params

    const updateGuruSchema = yup.object({
        nip: yup.string()
        .required('NIP Wajib Diisi')
        .min(9, 'NIP Harus 9 Karakter'),
        nama: yup.string()
        .required('Nama Tidak Boleh Kosong')
    })
    
    return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
         <Formik
         initialValues={{nip: nip, nama: nama}}
         validationSchema={updateGuruSchema}
            onSubmit={(values, actions) => {
              values.key = key
              dispatch({type: 'UPDATE_GURU', values})
              actions.resetForm()
              navigation.navigate('ListGuru')
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
        </TouchableWithoutFeedback>
       
    )
}

export default UpdateGuru
