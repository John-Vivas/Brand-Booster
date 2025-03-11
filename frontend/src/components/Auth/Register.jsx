// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//         confirmPassword: '',
//         businessName: '',
//     });
//     const { register } = useAuth();
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert('Passwords do not match');
//             return;
//         }
//         try {
//             await register(formData.email, formData.password);
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Registration failed:', error);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-md">
//                 <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                     Create your seller account
//                 </h2>
//             </div>

//             <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//                 <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     <form className="space-y-6" onSubmit={handleSubmit}>
//                         <div>
//                             <label
//                                 htmlFor="businessName"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Business Name
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="businessName"
//                                     name="businessName"
//                                     type="text"
//                                     required
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9900] focus:border-[#FF9900] sm:text-sm"
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, businessName: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Email address
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     required
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9900] focus:border-[#FF9900] sm:text-sm"
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, email: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label
//                                 htmlFor="password"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Password
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="new-password"
//                                     required
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9900] focus:border-[#FF9900] sm:text-sm"
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, password: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label
//                                 htmlFor="confirmPassword"
//                                 className="block text-sm font-medium text-gray-700"
//                             >
//                                 Confirm Password
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="confirmPassword"
//                                     name="confirmPassword"
//                                     type="password"
//                                     autoComplete="new-password"
//                                     required
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#FF9900] focus:border-[#FF9900] sm:text-sm"
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, confirmPassword: e.target.value })
//                                     }
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF9900] hover:bg-[#FF9900]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
//                             >
//                                 Create account
//                             </button>
//                         </div>
//                     </form>

//                     <div className="mt-6">
//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-300" />
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="px-2 bg-white text-gray-500">
//                                     Already have an account?
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="mt-6">
//                             <Link
//                                 to="/login"
//                                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#FF9900] bg-white border-[#FF9900] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
//                             >
//                                 Sign in instead
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;
"use client"

import { useState } from "react"

const Register = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Registration attempt:", user)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={user.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

