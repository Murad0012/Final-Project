import * as Yup from 'yup'

export const ProfileEditSchema = Yup.object().shape({
    description: Yup.string().required("Change your description!")
})