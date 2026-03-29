import { useState } from 'react'
import { registerUser } from '../../services/api'
import './styles.css'
 
function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })
 
  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
 
  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: '', type: '' })
 
    try {
      const data = await registerUser(formData)
 
      // Salva o token no localStorage para usar em requisições futuras
      localStorage.setItem('token', data.token)
      localStorage.setItem('userName', data.nome)
 
      setMessage({ text: `Cadastro realizado com sucesso! Bem-vindo, ${data.nome}.`, type: 'success' })
      setFormData({ nome: '', email: '', senha: '' })
    } catch (error) {
      setMessage({ text: error.message, type: 'error' })
    } finally {
      setLoading(false)
    }
  }
 
  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='register-form'>
        <h1>Cadastro</h1>
 
        {message.text && (
          <p className={`message ${message.type}`}>{message.text}</p>
        )}
 
        <input
          name='nome'
          type='text'
          placeholder='Nome'
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          name='email'
          type='email'
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name='senha'
          type='password'
          placeholder='Senha'
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}
 
export default Home
