import { Satellite, Droplets, Signal, BatteryCharging, Wifi, Zap, Shield, TrendingUp } from "lucide-react";
import type { NavLink, Feature, Step, Reason } from "@/types";

export const es = {
  nav: {
    features: "Características",
    howItWorks: "Cómo Funciona",
    whyAquaSat: "Por Qué AquaSat",
    contactUs: "Contactanos",
  },
  hero: {
    label: "Monitoreo de Campos con Satélites",
    title: "Nunca dejes que tu",
    titleHighlight: "ganado",
    titleSuffix: "se quede sin agua",
    description:
      "Sensores satelitales inteligentes que monitorean los niveles de agua en tiempo real — sin torres, sin cables, sin límites. Hecho para el campo argentino.",
    ctaDemo: "Pedí una Demo",
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
          "Ved los niveles de agua en tiempo real desde tu celular o computadora. Recibí alertas antes de que los bebederos se vacíen.",
      },
    ] as Step[],
  },
  whyAquaSat: {
    label: "Por Qué AquaSat",
    title: "La Forma Más Inteligente de",
    titleHighlight: "Monitorear Agua",
    description:
      "Las soluciones tradicionales fallan en áreas remotas. AquaSat fue construido específicamente para los desafíos de la ganadería argentina a gran escala.",
    reasons: [
      {
        icon: Wifi,
        title: "Sin Infraestructura Necesaria",
        description:
          "A diferencia de las soluciones LoRa o celulares, AquaSat usa conectividad satelital. Sin torres, sin repetidores — solo instalá y listo, incluso en los potreros más remotos.",
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
          "Las alertas de nivel de agua en tiempo real te permiten actuar antes de que los bebederos se sequen. Protegé tu rodeo, reducí viajes de trabajo y ganá tranquilidad desde cualquier lugar.",
      },
    ] as Reason[],
  },
  contact: {
    label: "Empezá",
    title: "¿Listo para",
    titleHighlight: "Modernizar",
    titleSuffix: "tu Campo?",
    description:
      "Ya sea que manejes 50 o 50,000 cabezas de ganado, nuestros sensores satelitales escalan con tu operación. Contactanos para una demo o precios.",
    benefits: [
      "Programa piloto gratuito para adoptantes tempranos",
      "Soporte de instalación incluido",
      "No se requieren contratos a largo plazo",
    ],
    form: {
      name: "Nombre",
      email: "Email",
      farm: "Campo / Empresa",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@campo.com",
      farmPlaceholder: "Nombre de tu campo o empresa",
      messagePlaceholder: "Contanos sobre tu operación...",
      submit: "Enviar Mensaje",
      success: "¡Mensaje enviado! Te vamos a contactar pronto.",
    },
  },
  footer: {
    tagline: "Monitoreo satelital de agua para campos modernos.",
    copyright: "Buenos Aires, Argentina.",
    links: {
      features: "Características",
      howItWorks: "Cómo Funciona",
      contact: "Contacto",
    },
  },
} as const;
