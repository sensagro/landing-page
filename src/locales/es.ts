import { Satellite, Droplets, Signal, BatteryCharging, Wifi, Zap, Shield, TrendingUp } from "lucide-react";
import type { NavLink, Feature, Step, Reason } from "@/types";

export const es = {
  nav: {
    features: "Características",
    howItWorks: "Cómo Funciona",
    whyAquaSat: "Por Qué Sensagro",
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
    label: "Por Qué Sensagro",
    title: "La Forma Más Inteligente de",
    titleHighlight: "Monitorear Agua",
    description:
      "Las soluciones tradicionales fallan en áreas remotas. Sensagro fue construido específicamente para los desafíos de la ganadería argentina a gran escala.",
    reasons: [
      {
        icon: Wifi,
        title: "Sin Infraestructura Necesaria",
        description:
          "A diferencia de las soluciones LoRa o celulares, Sensagro usa conectividad satelital. Sin torres, sin repetidores — solo instalá y listo, incluso en los potreros más remotos.",
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
    },
  },
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: Abril 2026",
    sections: [
      {
        title: "Información que recopilamos",
        content:
          "Recopilamos los datos que nos enviás al contactarnos (nombre, email, empresa, mensaje), la información de cuenta necesaria para usar Sensagro y datos técnicos de nuestras apps y sitios (por ejemplo tipo de dispositivo y uso) para operar y mejorar el producto.",
      },
      {
        title: "Cómo usamos tus datos",
        content:
          "Usamos tus datos para brindar monitoreo y alertas de agua, comunicarnos con vos, mantener la seguridad, cumplir obligaciones legales y mejorar el servicio. No vendemos tu información personal.",
      },
      {
        title: "Notificaciones push",
        content:
          "Si activás notificaciones en la app móvil, podemos enviar alertas sobre el estado de los sensores (por ejemplo agua baja). Podés desactivarlas en cualquier momento en la configuración del dispositivo o de la app. El envío de push utiliza proveedores de terceros (por ejemplo Expo) sujetos a sus políticas de privacidad.",
      },
      {
        title: "Contacto",
        content:
          "Para consultas de privacidad, contactanos mediante el formulario de este sitio o el correo indicado en tu correspondencia con Sensagro. Esta política puede actualizarse; la fecha arriba refleja la última revisión.",
      },
    ],
  },
  terms: {
    title: "Términos de Servicio",
    lastUpdated: "Última actualización: Abril 2026",
    sections: [
      {
        title: "Uso del servicio",
        content:
          "Sensagro ofrece herramientas de monitoreo con sensores vinculados por satélite para uso agropecuario. Aceptás usar el servicio solo con fines lícitos y de acuerdo con estos términos y la documentación aplicable.",
      },
      {
        title: "Registro de cuenta",
        content:
          "Sos responsable de mantener la confidencialidad de tus credenciales y de la actividad bajo tu cuenta. Avisanos de inmediato ante cualquier uso no autorizado.",
      },
      {
        title: "Propiedad intelectual",
        content:
          "La marca Sensagro, el software y el contenido están protegidos por las leyes de propiedad intelectual aplicables. No podés copiar, realizar ingeniería inversa ni hacer un uso indebido del servicio salvo lo expresamente permitido.",
      },
      {
        title: "Limitación de responsabilidad",
        content:
          "El servicio se ofrece \"tal cual\". En la medida máxima permitida por la ley, Sensagro no es responsable por daños indirectos o consecuentes derivados del uso del servicio. El monitoreo es una herramienta de apoyo y no reemplaza la verificación en campo cuando sea necesaria.",
      },
      {
        title: "Contacto",
        content:
          "Las consultas sobre estos términos pueden dirigirse por nuestros canales de contacto. El uso continuado del servicio tras cambios implica la aceptación de los términos actualizados cuando la ley lo permita.",
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
    title: "Sensagro",
    description: "Sensores satelitales de nivel de agua para campos ganaderos. Monitoreá bebederos en tiempo real sin infraestructura necesaria.",
    ogTitle: "Sensagro",
    ogDescription: "Sensores satelitales inteligentes que monitorean los niveles de agua en tiempo real para campos argentinos.",
  },
} as const;
