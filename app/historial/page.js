import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Datos simulados del paciente para este ejemplo
const pacienteData = {
    nombre: "Juan Pérez González",
    fechaNacimiento: "15/05/1985",
    edad: "38",
    sexo: "Masculino",
    domicilio: "Calle Principal 123, Ciudad Example, CP 12345",
    telefono: "+1234567890",
    email: "juan.perez@email.com",
    seguroMedico: "SM-12345678",
    tipoSangre: "O+",
    peso: "75 kg",
    altura: "175 cm",
    alergias: ["Penicilina", "Nueces", "Látex"],
    enfermedadesCronicas: ["Hipertensión", "Diabetes tipo 2", "Asma"],
    vacunas: [
        { nombre: "COVID-19", fecha: "15/03/2022" },
        { nombre: "Tétanos", fecha: "10/01/2019" },
        { nombre: "Influenza", fecha: "Anual, última: 01/10/2023" }
    ],
    tratamientosPrevios: [
        "Fisioterapia para lesión de rodilla (2020-2021)",
        "Terapia cognitivo-conductual para manejo del estrés (2019)"
    ],
    antecedentesFamiliares: [
        "Padre: Enfermedad cardíaca",
        "Madre: Cáncer de mama",
        "Hermano: Diabetes tipo 1"
    ],
    medicamentosActuales: [
        { nombre: "Metformina", dosis: "500mg", frecuencia: "2 veces al día" },
        { nombre: "Lisinopril", dosis: "10mg", frecuencia: "1 vez al día" },
        { nombre: "Salbutamol", dosis: "Inhalador", frecuencia: "Según sea necesario" }
    ],
    suplementos: [
        { nombre: "Vitamina D", dosis: "2000 UI", frecuencia: "1 vez al día" },
        { nombre: "Omega-3", dosis: "1000mg", frecuencia: "1 vez al día" }
    ],
    dispositivosMedicos: ["Marcapasos"],
    cirugiasPrevias: ["Apendicectomía (2010)", "Artroscopia de rodilla (2018)"],
    estiloVida: {
        tabaquismo: "No",
        consumoAlcohol: "Ocasional (1-2 bebidas por semana)",
        consumoDrogas: "No"
    },
    contactoEmergencia: {
        nombre: "María Pérez",
        relacion: "Esposa",
        telefono: "+1234567890"
    }
}

export default function HistorialEmergenciaCompleto() {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Card className="mb-6 border-2 border-red-500 shadow-lg">
                <CardHeader className="bg-red-100">
                    <CardTitle className="text-2xl font-bold text-red-700">INFORMACIÓN MÉDICA DE EMERGENCIA</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl font-semibold">{pacienteData.nombre}</h2>
                            <p>{pacienteData.edad} años, {pacienteData.sexo}</p>
                            <p>Nacimiento: {pacienteData.fechaNacimiento}</p>
                            <p>Tel: {pacienteData.telefono}</p>
                            <p>Email: {pacienteData.email}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Tipo de sangre: {pacienteData.tipoSangre}</p>
                            <p>Peso: {pacienteData.peso}</p>
                            <p>Altura: {pacienteData.altura}</p>
                            <p>Seguro Médico: {pacienteData.seguroMedico}</p>
                        </div>
                    </div>

                    <Separator />

                    <div>
                        <h3 className="font-semibold text-lg mb-2">Alergias:</h3>
                        <div className="flex flex-wrap gap-2">
                            {pacienteData.alergias.map((alergia, index) => (
                                <Badge key={index} variant="destructive">{alergia}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2">Condiciones médicas crónicas:</h3>
                        <div className="flex flex-wrap gap-2">
                            {pacienteData.enfermedadesCronicas.map((enfermedad, index) => (
                                <Badge key={index} variant="outline">{enfermedad}</Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2">Medicamentos actuales:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {pacienteData.medicamentosActuales.map((med, index) => (
                                <li key={index}>
                                    <span className="font-medium">{med.nombre}</span> - {med.dosis}, {med.frecuencia}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Separator />

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Información médica adicional</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold">Suplementos:</h4>
                                        <ul className="list-disc pl-5">
                                            {pacienteData.suplementos.map((suplemento, index) => (
                                                <li key={index}>{suplemento.nombre} - {suplemento.dosis}, {suplemento.frecuencia}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Dispositivos médicos:</h4>
                                        <ul className="list-disc pl-5">
                                            {pacienteData.dispositivosMedicos.map((dispositivo, index) => (
                                                <li key={index}>{dispositivo}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Cirugías previas:</h4>
                                        <ul className="list-disc pl-5">
                                            {pacienteData.cirugiasPrevias.map((cirugia, index) => (
                                                <li key={index}>{cirugia}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Vacunas relevantes:</h4>
                                        <ul className="list-disc pl-5">
                                            {pacienteData.vacunas.map((vacuna, index) => (
                                                <li key={index}>{vacuna.nombre} - {vacuna.fecha}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Tratamientos previos:</h4>
                                        <ul className="list-disc pl-5">
                                            {pacienteData.tratamientosPrevios.map((tratamiento, index) => (
                                                <li key={index}>{tratamiento}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Antecedentes familiares:</h4>
                                        <ul className="list-disc pl-5">
                                            {pacienteData.antecedentesFamiliares.map((antecedente, index) => (
                                                <li key={index}>{antecedente}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Estilo de vida</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc pl-5">
                                    <li>Tabaquismo: {pacienteData.estiloVida.tabaquismo}</li>
                                    <li>Consumo de alcohol: {pacienteData.estiloVida.consumoAlcohol}</li>
                                    <li>Consumo de drogas: {pacienteData.estiloVida.consumoDrogas}</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Separator />

                    <div className="bg-yellow-100 p-4 rounded-md">
                        <h3 className="font-semibold text-lg mb-2">Contacto de emergencia:</h3>
                        <p>{pacienteData.contactoEmergencia.nombre} ({pacienteData.contactoEmergencia.relacion})</p>
                        <p className="font-medium">Tel: {pacienteData.contactoEmergencia.telefono}</p>
                    </div>

                    <div className="text-sm text-gray-500 mt-4">
                        <p>Domicilio: {pacienteData.domicilio}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
