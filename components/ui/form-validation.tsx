"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

interface ValidationRules {
  [key: string]: ValidationRule
}

interface FormData {
  [key: string]: string
}

interface ValidationErrors {
  [key: string]: string | null
}

interface ValidatedInputProps {
  name: string
  label: string
  type?: "text" | "email" | "tel" | "textarea"
  placeholder?: string
  validationRule: ValidationRule
  value: string
  onChange: (value: string) => void
  className?: string
}

const validationMessages = {
  required: "Este campo é obrigatório",
  minLength: (min: number) => `Mínimo de ${min} caracteres`,
  maxLength: (max: number) => `Máximo de ${max} caracteres`,
  pattern: "Formato inválido",
  custom: "Valor inválido"
}

function validateField(value: string, rule: ValidationRule): string | null {
  if (rule.required && !value.trim()) {
    return validationMessages.required
  }

  if (rule.minLength && value.length < rule.minLength) {
    return validationMessages.minLength(rule.minLength)
  }

  if (rule.maxLength && value.length > rule.maxLength) {
    return validationMessages.maxLength(rule.maxLength)
  }

  if (rule.pattern && !rule.pattern.test(value)) {
    return validationMessages.pattern
  }

  if (rule.custom) {
    const customError = rule.custom(value)
    if (customError) return customError
  }

  return null
}

export function ValidatedInput({
  name,
  label,
  type = "text",
  placeholder,
  validationRule,
  value,
  onChange,
  className
}: ValidatedInputProps) {
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Evitar problemas de hidratação
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (touched) {
      const validationError = validateField(value, validationRule)
      setError(validationError)
    }
  }, [value, validationRule, touched])

  const handleBlur = () => {
    setTouched(true)
    const validationError = validateField(value, validationRule)
    setError(validationError)
  }

  const handleChange = (newValue: string) => {
    onChange(newValue)
    if (touched) {
      const validationError = validateField(newValue, validationRule)
      setError(validationError)
    }
  }

  const getStatusIcon = () => {
    if (!touched || !isMounted) return null
    if (error) return <XCircle className="w-5 h-5 text-red-500" />
    if (value.trim()) return <CheckCircle className="w-5 h-5 text-green-500" />
    return null
  }

  const getStatusColor = () => {
    if (!touched) return "border-[#9ca3af] focus:border-[#374151] focus:ring-[#374151]"
    if (error) return "border-red-500 focus:border-red-500 focus:ring-red-500"
    if (value.trim()) return "border-green-500 focus:border-green-500 focus:ring-green-500"
    return "border-[#9ca3af] focus:border-[#374151] focus:ring-[#374151]"
  }

  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-medium text-[#374151]">
        {label}
        {validationRule.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {type === "textarea" ? (
          <Textarea
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={cn(
              "pr-10 transition-colors",
              getStatusColor()
            )}
          />
        ) : (
          <Input
            type={type}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={cn(
              "pr-10 transition-colors",
              getStatusColor()
            )}
          />
        )}
        
        {getStatusIcon() && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {getStatusIcon()}
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-sm text-red-600">
          {isMounted && <AlertCircle className="w-4 h-4" />}
          <span>{error}</span>
        </div>
      )}

      {!error && touched && value.trim() && (
        <div className="flex items-center space-x-2 text-sm text-green-600">
          <CheckCircle className="w-4 h-4" />
          <span>Campo válido</span>
        </div>
      )}
    </div>
  )
}

interface FormValidationContext {
  formData: FormData
  errors: ValidationErrors
  updateField: (fieldName: string, value: string) => void
  isSubmitting: boolean
}

interface FormValidationProps {
  children: React.ReactNode | ((context: FormValidationContext) => React.ReactNode)
  onSubmit: (data: FormData) => void
  validationRules: ValidationRules
  initialData?: FormData
  submitButtonText?: string
  className?: string
}

export function FormValidation({
  children,
  onSubmit,
  validationRules,
  initialData = {},
  submitButtonText = "Enviar",
  className
}: FormValidationProps) {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Evitar problemas de hidratação
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {}
    
    Object.keys(validationRules).forEach(fieldName => {
      const value = formData[fieldName] || ""
      const rule = validationRules[fieldName]
      const error = validateField(value, rule)
      if (error) {
        newErrors[fieldName] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      try {
        await onSubmit(formData)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const updateField = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }))
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: null }))
    }
  }

  const contextValue: FormValidationContext = {
    formData,
    errors,
    updateField,
    isSubmitting
  }

  // Não renderizar o formulário até o componente estar montado no cliente
  if (!isMounted) {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {typeof children === 'function' ? children(contextValue) : children}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white"
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Enviando...</span>
          </div>
        ) : (
          submitButtonText
        )}
      </Button>
    </form>
  )
}
