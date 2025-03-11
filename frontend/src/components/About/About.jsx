
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Potencia tus productos y lleva tu marca al siguiente nivel
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Somos la plataforma que te ayuda a destacar en el mercado y alcanzar a más clientes potenciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg transition-all duration-200"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-200"
              >
                Regístrate con Nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Somos una empresa dedicada a potenciar tus artículos para que puedan lucir y llevar tu marca a otro nivel.
            Nuestro objetivo es brindarte las herramientas y la plataforma necesaria para que tus productos destaquen en
            el mercado y alcancen a más clientes potenciales.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105">
            <div className="h-3 bg-blue-600"></div>
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aumenta tus Ventas</h3>
              <p className="text-gray-600">
                Nuestras herramientas de marketing y análisis te ayudan a incrementar tus ventas y llegar a más
                clientes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105">
            <div className="h-3 bg-blue-600"></div>
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expande tu Negocio</h3>
              <p className="text-gray-600">
                Accede a nuevos mercados y amplía tu base de clientes con nuestra plataforma global.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-105">
            <div className="h-3 bg-blue-600"></div>
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimiza tus Ganancias</h3>
              <p className="text-gray-600">
                Herramientas de análisis y gestión para maximizar tus ingresos y reducir costos operativos.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cómo Funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Regístrate</h3>
              <p className="text-gray-600">Crea tu cuenta de vendedor en nuestra plataforma</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Configura tu Tienda</h3>
              <p className="text-gray-600">Personaliza tu perfil y configura tus métodos de pago</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Sube tus Productos</h3>
              <p className="text-gray-600">Añade tus artículos con fotos y descripciones detalladas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">¡Comienza a Vender!</h3>
              <p className="text-gray-600">Recibe pedidos y haz crecer tu negocio</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para llevar tu marca al siguiente nivel?
              </h2>
              <p className="text-lg text-gray-600">
                Únete a miles de emprendedores que ya están transformando sus negocios con nosotros.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login"
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all duration-200"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/register"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200"
              >
                Regístrate con Nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Lo que dicen nuestros vendedores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JR</span>
                </div>
                <div>
                  <h3 className="font-semibold">Juan Rodríguez</h3>
                  <p className="text-sm text-gray-500">Artesanías Modernas</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Desde que comencé a vender en esta plataforma, mis ventas han aumentado un 200%. La visibilidad que me
                han dado es increíble."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">ML</span>
                </div>
                <div>
                  <h3 className="font-semibold">María López</h3>
                  <p className="text-sm text-gray-500">Moda Sostenible</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Las herramientas de análisis me han ayudado a entender mejor a mis clientes y a optimizar mi
                inventario. Totalmente recomendado."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">CP</span>
                </div>
                <div>
                  <h3 className="font-semibold">Carlos Pérez</h3>
                  <p className="text-sm text-gray-500">Tecnología Innovadora</p>
                </div>
              </div>
              <p className="text-gray-600">
                "El soporte al cliente es excepcional. Siempre están disponibles para ayudarme con cualquier duda o
                problema que pueda surgir."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

