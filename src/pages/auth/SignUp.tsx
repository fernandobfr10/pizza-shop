import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

  async function handlesignUp(data: SignUpForm) {
    try {
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso.', {
        action: { label: 'Login', onClick: () => navigate('/sign-in') }
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handlesignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input type="text" id="restaurantName" {...register('restaurantName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input type="text" id="managerName" {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input type="tel" id="phone" {...register('phone')} />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-sm text-center leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos <a href="" className="underline underline-offset-4">termos de serviço</a> e <a href="" className="underline underline-offset-4">políticas de privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}