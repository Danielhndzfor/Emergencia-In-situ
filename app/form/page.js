'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'


export default function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        fechaNacimiento: '',
        edad: '',
        sexo: '',
        domicilio: '',
        telefono: '',
        email: '',
        seguroMedico: '',
        tipoSangre: '',
        peso: '',
        altura: '',
        alergias: '',
        enfermedadesCronicas: '',
        vacunas: '',
        tratamientosPrevios: '',
        antecedentesFamiliares: '',
        medicamentosActuales: '',
        suplementos: '',
        dispositivosMedicos: '',
        cirugiasPrevias: '',
        tabaquismo: '',
        consumoAlcohol: '',
        consumoDrogas: '',
        contactoEmergenciaNombre: '',
        contactoEmergenciaRelacion: '',
        contactoEmergenciaTelefono: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <div className="container mx-auto p-4 max-w-4xl" style={{padding: '100px'}}>
                <h1 className="text-3xl font-bold mb-6 text-center">Registro de Historial Clínico</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Información General del Paciente */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información General del Paciente</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="nombre">Nombre completo</Label>
                                    <Input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                                    <Input id="fechaNacimiento" name="fechaNacimiento" type="date" value={formData.fechaNacimiento} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="edad">Edad</Label>
                                    <Input id="edad" name="edad" type="number" value={formData.edad} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label>Sexo</Label>
                                    <RadioGroup name="sexo" value={formData.sexo} onValueChange={(value) => handleChange({ target: { name: 'sexo', value } })}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="masculino" id="masculino" />
                                            <Label htmlFor="masculino">Masculino</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="femenino" id="femenino" />
                                            <Label htmlFor="femenino">Femenino</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div>
                                    <Label htmlFor="domicilio">Domicilio</Label>
                                    <Input id="domicilio" name="domicilio" value={formData.domicilio} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="telefono">Teléfono de contacto</Label>
                                    <Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="email">Correo electrónico</Label>
                                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="seguroMedico">Número de seguro médico</Label>
                                    <Input id="seguroMedico" name="seguroMedico" value={formData.seguroMedico} onChange={handleChange} />
                                </div>
                                <div>
                                    <Label htmlFor="tipoSangre">Tipo de sangre</Label>
                                    <Select name="tipoSangre" value={formData.tipoSangre} onValueChange={(value) => handleChange({ target: { name: 'tipoSangre', value } })}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione tipo de sangre" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="A+">A+</SelectItem>
                                            <SelectItem value="A-">A-</SelectItem>
                                            <SelectItem value="B+">B+</SelectItem>
                                            <SelectItem value="B-">B-</SelectItem>
                                            <SelectItem value="AB+">AB+</SelectItem>
                                            <SelectItem value="AB-">AB-</SelectItem>
                                            <SelectItem value="O+">O+</SelectItem>
                                            <SelectItem value="O-">O-</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="peso">Peso (kg)</Label>
                                    <Input id="peso" name="peso" type="number" value={formData.peso} onChange={handleChange} required />
                                </div>
                                <div>
                                    <Label htmlFor="altura">Altura (cm)</Label>
                                    <Input id="altura" name="altura" type="number" value={formData.altura} onChange={handleChange} required />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Separator className="my-8" />

                    {/* Antecedentes Médicos */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Antecedentes Médicos</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="alergias">Alergias</Label>
                                <Textarea id="alergias" name="alergias" value={formData.alergias} onChange={handleChange} placeholder="Describa sus alergias" />
                            </div>
                            <div>
                                <Label htmlFor="enfermedadesCronicas">Enfermedades crónicas</Label>
                                <Textarea id="enfermedadesCronicas" name="enfermedadesCronicas" value={formData.enfermedadesCronicas} onChange={handleChange} placeholder="Describa sus enfermedades crónicas" />
                            </div>
                            <div>
                                <Label htmlFor="vacunas">Vacunas</Label>
                                <Textarea id="vacunas" name="vacunas" value={formData.vacunas} onChange={handleChange} placeholder="Liste sus vacunas y fechas" />
                            </div>
                            <div>
                                <Label htmlFor="tratamientosPrevios">Tratamientos previos</Label>
                                <Textarea id="tratamientosPrevios" name="tratamientosPrevios" value={formData.tratamientosPrevios} onChange={handleChange} placeholder="Describa tratamientos previos" />
                            </div>
                            <div>
                                <Label htmlFor="antecedentesFamiliares">Antecedentes familiares</Label>
                                <Textarea id="antecedentesFamiliares" name="antecedentesFamiliares" value={formData.antecedentesFamiliares} onChange={handleChange} placeholder="Describa antecedentes familiares relevantes" />
                            </div>
                        </CardContent>
                    </Card>

                    <Separator className="my-8" />

                    <Card>
                        <CardHeader>
                            <CardTitle>Medicación Actual</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="medicamentosActuales">Medicamentos actuales</Label>
                                <Textarea id="medicamentosActuales" name="medicamentosActuales" value={formData.medicamentosActuales} onChange={handleChange} placeholder="Liste medicamentos, dosis y frecuencia" />
                            </div>
                            <div>
                                <Label htmlFor="suplementos">Suplementos</Label>
                                <Textarea id="suplementos" name="suplementos" value={formData.suplementos} onChange={handleChange} placeholder="Liste suplementos, dosis y frecuencia" />
                            </div>
                        </CardContent>
                    </Card>

                    <Separator className="my-8" />

                    <Card>
                        <CardHeader>
                            <CardTitle>Información Médica Adicional</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="dispositivosMedicos">Dispositivos médicos</Label>
                                <Input id="dispositivosMedicos" name="dispositivosMedicos" value={formData.dispositivosMedicos} onChange={handleChange} placeholder="Ej: Marcapasos, prótesis, etc." />
                            </div>
                            <div>
                                <Label htmlFor="cirugiasPrevias">Cirugías previas</Label>
                                <Textarea id="cirugiasPrevias" name="cirugiasPrevias" value={formData.cirugiasPrevias} onChange={handleChange} placeholder="Liste cirugías y fechas" />
                            </div>
                        </CardContent>
                    </Card>

                    <Separator className="my-8" />

                    <Card>
                        <CardHeader>
                            <CardTitle>Estilo de Vida</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="tabaquismo">Tabaquismo</Label>
                                <Select name="tabaquismo" value={formData.tabaquismo} onValueChange={(value) => handleChange({ target: { name: 'tabaquismo', value } })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione una opción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="no">No</SelectItem>
                                        <SelectItem value="ocasional">Ocasional</SelectItem>
                                        <SelectItem value="frecuente">Frecuente</SelectItem>
                                        <SelectItem value="diario">Diario</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="consumoAlcohol">Consumo de alcohol</Label>
                                <Select name="consumoAlcohol" value={formData.consumoAlcohol} onValueChange={(value) => handleChange({ target: { name: 'consumoAlcohol', value } })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione una opción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="no">No</SelectItem>
                                        <SelectItem value="ocasional">Ocasional</SelectItem>
                                        <SelectItem value="frecuente">Frecuente</SelectItem>
                                        <SelectItem value="diario">Diario</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="consumoDrogas">Consumo de drogas</Label>
                                <Select name="consumoDrogas" value={formData.consumoDrogas} onValueChange={(value) => handleChange({ target: { name: 'consumoDrogas', value } })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione una opción" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="no">No</SelectItem>
                                        <SelectItem value="ocasional">Ocasional</SelectItem>
                                        <SelectItem value="frecuente">Frecuente</SelectItem>
                                        <SelectItem value="diario">Diario</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Separator className="my-8" />

                    <Card>
                        <CardHeader>
                            <CardTitle>Contacto de Emergencia</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div>
                                <Label htmlFor="contactoEmergenciaNombre">Nombre del contacto de emergencia</Label>
                                <Input id="contactoEmergenciaNombre" name="contactoEmergenciaNombre" value={formData.contactoEmergenciaNombre} onChange={handleChange} required />
                            </div>
                            <div>
                                <Label htmlFor="contactoEmergenciaRelacion">Relación con el paciente</Label>
                                <Input id="contactoEmergenciaRelacion" name="contactoEmergenciaRelacion" value={formData.contactoEmergenciaRelacion} onChange={handleChange} required />
                            </div>
                            <div>
                                <Label htmlFor="contactoEmergenciaTelefono">Teléfono del contacto de emergencia</Label>
                                <Input id="contactoEmergenciaTelefono" name="contactoEmergenciaTelefono" type="tel" value={formData.contactoEmergenciaTelefono} onChange={handleChange} required />
                            </div>
                        </CardContent>
                    </Card>

                    <Separator className="my-8" />

                    <div className="flex justify-end">
                        <Button type="submit" className="w-full md:w-auto">Guardar Historial Clínico</Button>
                    </div>
                </form>
            </div>
        </>
    );
}