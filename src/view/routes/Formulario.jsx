import { Tarea } from './components/Task'
import { useState } from 'react'
import { Forms } from './components/Forms'

const [tarea, setTarea] = useState('')
const [listadoTareas, setListadosTareas] = useState([])

function handleSubmit (e) {
  e.preventDefault()

  if (tarea === '') {
    window.alert('DEBES DE PONER UNA TAREA')
    return
  }

  const nuevaTarea = {
    id: Date.now(),
    tarea,
    completado: false
  }

  const temp = [nuevaTarea, ...listadoTareas]
  setListadosTareas(temp)

  setTarea('')

  console.log(listadoTareas)
}

function handleChange (e) {
  setTarea(e.target.value)
}

function onActualizarTarea (objetoEditarTarea) {
  const { id, tarea } = objetoEditarTarea

  const temp = [...listadoTareas]
  const elemento = temp.find(item => item.id === id)
  elemento.tarea = tarea

  setListadosTareas(temp)
}

function onBorrarTarea (id) {
  const temp = listadoTareas.filter(item => item.id !== id)
  setListadosTareas(temp)
}

  <>
    <div className='contenedorPrincipal'>
      <h1>Lista de Tareas</h1>

      <div className='contenedorFormulario'>
        <Forms
          tarea={tarea}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>

      <div
        className='contenedorTareas'
      >
        <h2>Lista de Tareas</h2>
        <div className='contenedorInfoTareas'>
          {
            listadoTareas.map(tarea => (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea}
                onActualizarTarea={onActualizarTarea}
                onBorrarTarea={onBorrarTarea}
              />
            ))
          }
        </div>
      </div>
    </div>
  </>
