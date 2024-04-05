import * as Yup from 'yup'

export const CreatePostSchema = Yup.object().shape({
    caption: Yup.string().required("Caption cannot be empty!"),
    img: Yup.string().required("You must enter a picture!"),
    tags: Yup.string().required("You must enter at least one tag!")
})