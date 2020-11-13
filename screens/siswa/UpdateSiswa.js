import React from 'react'
import { 
    View, Text, Picker, TextInput,
    Keyboard, TouchableWithoutFeedback
            
} from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import { Formik } from 'formik'
import * as yup from 'yup'
import CustomButton from './../../shared/customButton'
import { useSiswaContext } from './../../contexts/SiswaContext'
const UpdateSiswa = ({route, navigation}) => {
    const { dispatch } = useSiswaContext()
    const { key, nama, kelas, nis } = route.params
    const initialValues = {
        kelas: ''
    }

    const updateSiswaSchema = yup.object({
        nis: yup.string()
          .required('NIS Harus Tidak Boleh Kosong !')
          .min(9, 'NIS Harus 9 Karakter')
          .max(9, 'NIS Harus 9 Karakter'),
       nama: yup.string()
          .required('Nama Tidak Boleh Kosong')
          .matches(/^[aA-zZ\s]+$/ , 'Nama Harus Berupa String !'),
       kelas: yup.string()
        .required('Pilih Kelas !')
        .test('is-picker-incorrect', 'Pilih Kelas !', (val) => {
            return val !== ''
        })
  
      })

      const uuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
       }

    return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
         <Formik
         initialValues={{nis: nis, nama: nama, kelas: kelas}}
         validationSchema={updateSiswaSchema}
            onSubmit={(values, actions) => {
              values.key = key
              dispatch({type: 'UPDATE_SISWA', values})
              actions.resetForm()
              navigation.navigate('ListSiswa')
            }}
         >
             {props => (
             <View>
                 <TextInput 
                    style={globalStyles.input}
                    placeholder='Masukkan Nis..'
                    onChangeText={props.handleChange('nis')}
                    onBlur={props.handleBlur('nis')} 
                    value={props.values.nis}
                    keyboardType='numeric'
                 />
                <Text style={globalStyles.errorText}>{props.touched.nis && props.errors.nis}</Text>
                <TextInput 
                    style={globalStyles.input}
                    placeholder='Masukkan Nama..'
                    onChangeText={props.handleChange('nama')}
                    onBlur={props.handleBlur('nama')}
                    value={props.values.nama}
                />
                <Text style={globalStyles.errorText}>{props.touched.nama && props.errors.nama}</Text>
                <Picker
                    style={globalStyles.input}
                    selectedValue={props.values.kelas}
                    onValueChange={itemValue => props.setFieldValue('kelas', itemValue)}
                >
                  <Picker.Item label='Pilih Kelas..' value={initialValues.kelas} key={0} />
                  <Picker.Item label="XII RPL-1" value="XII RPL-1" key={1} />
                  <Picker.Item label="XII RPL-2" value="XII RPL-2" key={2} />
                </Picker>
                <Text style={globalStyles.errorText}>{props.touched.kelas && props.errors.kelas}</Text>

                <CustomButton onPress={props.handleSubmit} text='Submit' />
            </View>
             )}
         </Formik>
        </View>
        </TouchableWithoutFeedback>
       
    )
}

export default UpdateSiswa
