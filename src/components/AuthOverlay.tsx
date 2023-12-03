import React from 'react'
import { Modal } from '@mantine/core'

import { useGeneralStore } from "../stores/generalStore"
import { useForm } from '@mantine/form'


function AuthOverlay() {

    const isLoginModalOpen = useGeneralStore((state) => state.isLoginModalOpen)
    const toggleLoginModal = useGeneralStore((state) => state.toggleLoginModal)

    return (<Modal
        centered
        opened={isLoginModalOpen}
        onClose={toggleLoginModal}

    >
        AuthOverlay

    </Modal>
    )

}
const Register = () => {
    const form = useForm({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: {
            fullname: (value: string) =>
                value.trim().length >= 3
                    ? null
                    : "Username must be at least 3 characters",
            email: (value: string) =>
                value.includes("@") ? null : "Invalid email",
            password: (value: string) =>
                value.trim().length >= 3
                    ? null
                    : "Password must be at least 3 characters",
            confirmPassword: (value: string, values) =>
                value.trim().length >= 3 && value === values.password
                    ? null
                    : "Passwords do not match",
        },
    })}
    export default AuthOverlay