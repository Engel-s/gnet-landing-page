export type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "Panel principal",
    description:
      "Vista general del sistema para acceder rápidamente a los módulos principales.",
    image: "/images/CapturadePanelPrincipal.png",
    icon: "lucide:layout-dashboard",
  },
  {
    title: "Login",
    description:
      "Acceso seguro para los usuarios del sistema según sus permisos.",
    image: "/images/CapturadeLogin.png",
    icon: "lucide:lock-keyhole",
  },
  {
    title: "Facturación",
    description:
      "Registro de ventas, productos, servicios y comprobantes de forma ágil.",
    image: "/images/CapturadeFacturacion.png",
    icon: "lucide:receipt-text",
  },
  {
    title: "Productos",
    description:
      "Control de productos, stock, precios, series y garantías del inventario.",
    image: "/images/CapturadeProductos.png",
    icon: "lucide:package-search",
  },
  {
    title: "Compras",
    description:
      "Registro de compras realizadas para actualizar y controlar el inventario.",
    image: "/images/CapturadeCompras.png",
    icon: "lucide:shopping-cart",
  },
  {
    title: "Créditos",
    description:
      "Seguimiento de créditos institucionales, abonos y saldos pendientes.",
    image: "/images/CapturadeCredito.png",
    icon: "lucide:building-2",
  },
  {
    title: "Arqueo de caja",
    description:
      "Control de apertura, movimientos, egresos y cierre de caja.",
    image: "/images/CapturadeArqueodeCaja.png",
    icon: "lucide:wallet-cards",
  },
  {
    title: "Devoluciones",
    description:
      "Gestión de devoluciones y cambios de productos según las reglas del negocio.",
    image: "/images/CapturadeDevolucion.png",
    icon: "lucide:rotate-ccw",
  },
  {
    title: "Instalación de cámaras",
    description:
      "Módulo para registrar y controlar servicios de instalación de cámaras.",
    image: "/images/CapturadeInstalaciondeCamaras.png",
    icon: "lucide:cctv",
  },
  {
    title: "Servicio técnico",
    description:
      "Seguimiento de trabajos técnicos, diagnósticos y servicios realizados.",
    image: "/images/CapturadeServicioTecnico.png",
    icon: "lucide:wrench",
  },
  {
    title: "Otras salidas",
    description:
      "Registro de salidas de inventario por motivos distintos a ventas normales.",
    image: "/images/CapturadeOtrasSalidas.png",
    icon: "lucide:arrow-up-right",
  },
  {
    title: "Gestión de planilla",
    description:
      "Administración de pagos, periodos y control de planilla del personal.",
    image: "/images/CapturadeGestiondeplanilla.png",
    icon: "lucide:badge-dollar-sign",
  },
  {
    title: "Reportes",
    description:
      "Generación de informes para análisis, control y toma de decisiones.",
    image: "/images/CapturadeReportes.png",
    icon: "lucide:chart-column-big",
  },
  {
    title: "Mantenimiento",
    description:
      "Herramientas de respaldo y administración técnica del sistema.",
    image: "/images/CapturadeMantenimiento.png",
    icon: "lucide:settings",
  },
];