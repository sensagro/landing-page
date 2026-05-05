import { Satellite, Droplets, Signal, BatteryCharging, Wifi, Zap, Shield, TrendingUp } from "lucide-react";
import type { NavLink, Feature, Step, Reason } from "@/types";

export const es = {
  nav: {
    features: "Características",
    howItWorks: "Cómo Funciona",
    whyAquaSat: "Por Qué SensAgro",
    contactUs: "Contactanos",
  },
  hero: {
    label: "Monitoreo de Campos con Satélites",
    title: "Nunca dejes que tu",
    titleHighlight: "ganado",
    titleSuffix: "se quede sin agua",
    description:
      "Sensores satelitales inteligentes que monitorean los niveles de agua en tiempo real — sin torres, sin cables, sin límites. Hecho para el campo argentino.",
    ctaDemo: "Contactanos",
    ctaHowItWorks: "Cómo Funciona",
    comingSoon: "Próximamente",
    appStore: "App Store",
    playStore: "Google Play",
    imageAlt: "Sensor de agua inteligente en campo argentino al atardecer",
  },
  features: {
    label: "Por Qué Elegirnos",
    title: "Tecnología que",
    titleHighlight: "simplemente funciona",
    description:
      "Diseñado para las duras realidades del campo argentino. Sin infraestructura, sin complejidad — solo datos confiables de cada bebedero.",
    items: [
      {
        icon: Satellite,
        title: "Comunicación Satelital",
        description:
          "Sin LoRa, sin WiFi, sin torres celulares necesarias. Enlace satelital directo funciona en cualquier lugar de tu campo, sin importar qué tan remoto sea.",
      },
      {
        icon: Droplets,
        title: "Nivel de Agua en Tiempo Real",
        description:
          "Vas a saber exactamente cuándo los bebederos necesitan recarga. Recibí alertas al instante antes de que tu ganado se quede sin agua.",
      },
      {
        icon: Signal,
        title: "100% de Cobertura",
        description:
          "Funciona en toda la pampa argentina. Sin zonas muertas, sin infraestructura requerida — solo cielo.",
      },
      {
        icon: BatteryCharging,
        title: "Energía Solar",
        description:
          "Energía autosustentable con paneles solares integrados. Instalá una vez, monitoreá para siempre con cero mantenimiento.",
      },
    ] as Feature[],
  },
  howItWorks: {
    label: "Cómo Funciona",
    title: "Tres Pasos para",
    titleHighlight: "Visibilidad Completa",
    imageAlt: "Vista satelital de campos",
    steps: [
      {
        number: "01",
        title: "Instalá",
        description:
          "Montá el sensor en cualquier bebedero en minutos. Sin herramientas, sin cableado, sin técnico necesario.",
      },
      {
        number: "02",
        title: "Conectá",
        description:
          "El sensor se conecta automáticamente a los satélites. Sin cobertura celular o WiFi requerida.",
      },
      {
        number: "03",
        title: "Monitoreá",
        description:
          "Mira los niveles de agua en tiempo real desde tu celular o computadora. Recibí alertas antes de que los bebederos se vacíen.",
      },
    ] as Step[],
  },
  whyAquaSat: {
    label: "Por Qué SensAgro",
    title: "La Forma Más Inteligente de",
    titleHighlight: "Monitorear Agua",
    description:
      "Las soluciones tradicionales fallan en áreas remotas. SensAgro fue construido específicamente para los desafíos de la ganadería argentina a gran escala.",
    reasons: [
      {
        icon: Wifi,
        title: "Sin Infraestructura Necesaria",
        description:
          "A diferencia de las soluciones LoRa o celulares, SensAgro usa conectividad satelital. Sin torres, sin repetidores — solo instalá y listo, incluso en los potreros más remotos.",
      },
      {
        icon: Zap,
        title: "100% Energía Solar",
        description:
          "Nuestros sensores funcionan completamente con energía solar con respaldo de batería, lo que significa cero costos de energía continuos y operación sin mantenimiento durante todo el año.",
      },
      {
        icon: Shield,
        title: "Hecho para el Campo",
        description:
          "Clasificación IP68, resistente a UV y a prueba de ganado. Diseñado desde el primer día para las duras condiciones de las estancias argentinas — polvo, calor, lluvia y ganado.",
      },
      {
        icon: TrendingUp,
        title: "Prevení Pérdidas Antes de que Ocurran",
        description:
          "Las alertas de nivel de agua en tiempo real te permiten actuar antes de que los bebederos se sequen. Protegé tu ganado, reducí viajes de trabajo y ganá tranquilidad desde cualquier lugar.",
      },
    ] as Reason[],
  },
  contact: {
    label: "Empezá",
    title: "¿Listo para",
    titleHighlight: "Modernizar",
    titleSuffix: "tu Campo?",
    description:
      "Ya sea que manejes 50 o 50,000 cabezas de ganado, nos encantaría saber de vos. Contactanos para más información o para expresar tu interés.",
    benefits: [
      "Soporte de instalación incluido",
      "No se requieren contratos a largo plazo",
    ],
    form: {
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@campo.com",
      companyPlaceholder: "Nombre de tu empresa u organización",
      messagePlaceholder: "Contanos sobre tu operación...",
      submit: "Enviar Mensaje",
      success: "¡Mensaje enviado! Te vamos a contactar pronto.",
      error: "Ups, parece que nuestro sistema no está funcionando. Por favor intentá de nuevo más tarde.",
      invalidEmail: "Por favor ingresá un email válido.",
      messageTooLong: "El mensaje debe tener menos de 2000 caracteres.",
      invalidMessage: "Por favor incluí un mensaje, no solo un enlace.",
    },
  },
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 28 de abril de 2026",
    sections: [
      {
        title: "Información que recopilamos",
        content:
          "Recopilamos los datos que nos enviás al contactarnos o crear una cuenta, incluyendo nombre, email, campo o empresa y mensajes. Cuando el servicio está activo, también procesamos identificadores de sensores, cuentas asignadas, lecturas de nivel de agua, telemetría de batería y temperatura, ubicación aproximada del sensor, tokens de notificaciones push y registros operativos necesarios para operar SensAgro.",
      },
      {
        title: "Cómo usamos tus datos",
        content:
          "Usamos estos datos para operar el monitoreo satelital de agua, mostrar el estado de sensores en la app y el portal interno, enviar alertas de agua baja o falta de señal, brindar soporte, proteger cuentas, investigar incidentes y mejorar el producto. No vendemos información personal.",
      },
      {
        title: "Base legal y derechos",
        content:
          "Para usuarios de Argentina, esta política busca alinearse con la Ley 25.326 de Protección de Datos Personales. Podés solicitar acceso, rectificación, actualización o eliminación de tus datos personales mediante el formulario del sitio o tu contacto habitual de soporte de SensAgro.",
      },
      {
        title: "Proveedores y conservación",
        content:
          "SensAgro utiliza proveedores de infraestructura como Firebase, Expo, Myriota, servicios de hosting y base de datos para entregar el producto. Conservamos datos operativos solo durante el tiempo necesario para prestar el servicio, cumplir obligaciones legales, mantener seguridad, brindar soporte y evaluar pilotos, salvo que la ley exija un plazo mayor.",
      },
      {
        title: "Contacto y actualizaciones",
        content:
          "Para consultas de privacidad, contactanos mediante el formulario de este sitio o el correo de soporte usado en tu correspondencia con SensAgro. Esta política de base para pilotos puede actualizarse a medida que el producto y la revisión legal maduren; la fecha superior refleja la última revisión.",
      },
    ],
  },
  terms: {
    title: "Términos de Servicio",
    lastUpdated: "Última actualización: 28 de abril de 2026",
    sections: [
      {
        title: "Descripción del servicio",
        content:
          "SensAgro ofrece herramientas de monitoreo satelital de bebederos para uso agropecuario, incluyendo acceso móvil para productores, herramientas internas de administración, ingesta de datos de sensores y envío de alertas. Durante los pilotos, las funcionalidades, precios, configuración de hardware y disponibilidad pueden cambiar mientras validamos el servicio.",
      },
      {
        title: "Cuentas y uso aceptable",
        content:
          "Sos responsable de mantener seguras tus credenciales y de usar el servicio solo para operaciones agropecuarias lícitas. No intentes interferir con la plataforma, acceder a datos de otro usuario, manipular dispositivos o usar el servicio de una forma que pueda dañar a SensAgro, su infraestructura u otros usuarios.",
      },
      {
        title: "Piloto, suspensión y disponibilidad",
        content:
          "SensAgro puede suspender o limitar el acceso a cuentas, sensores o funcionalidades cuando sea necesario por seguridad, falta de pago, uso indebido, baja de cuenta u operación del piloto. La conectividad satelital, el estado del dispositivo, el clima, la calidad de instalación y proveedores externos pueden afectar la disponibilidad, por lo que el servicio debe tratarse como una herramienta de monitoreo y no como la única fuente de verdad para bienestar animal o gestión de agua.",
      },
      {
        title: "Propiedad intelectual y datos",
        content:
          "El software, marca, documentación y contenido del sitio de SensAgro pertenecen a SensAgro o sus licenciantes. Los datos del campo y sensores permanecen asociados a la cuenta del cliente; SensAgro puede procesarlos para operar, brindar soporte, proteger y mejorar el servicio según la Política de Privacidad.",
      },
      {
        title: "Sin garantía, ley aplicable y cambios",
        content:
          "Durante la etapa piloto, el servicio se ofrece \"tal cual\" y \"según disponibilidad\". En la medida máxima permitida por la ley, SensAgro no es responsable por daños indirectos o consecuentes derivados del uso del servicio. Estos términos se rigen por las leyes de Argentina. Podemos actualizarlos a medida que el producto madure; el uso continuado tras los cambios implica aceptación cuando la ley lo permita.",
      },
    ],
  },
  footer: {
    tagline: "Monitoreo satelital de agua para campos modernos.",
    copyright: "Buenos Aires, Argentina.",
    links: {
      features: "Características",
      howItWorks: "Cómo Funciona",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  },
  meta: {
    title: "SensAgro",
    description: "Sensores satelitales de nivel de agua para campos ganaderos. Monitoreá bebederos en tiempo real sin infraestructura necesaria.",
    ogTitle: "SensAgro",
    ogDescription: "Sensores satelitales inteligentes que monitorean los niveles de agua en tiempo real para campos argentinos.",
  },
} as const;
