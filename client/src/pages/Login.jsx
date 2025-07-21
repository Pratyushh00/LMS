import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import { useLoginUserMutation, useRegisterUserMutation } from "../features/api/authApi"
import { toast } from "sonner"

const Login = () => {
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    });
    const [registerValues, setRegisterValues] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
    const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        type === "login" ? setLoginValues({ ...loginValues, [name]: value }) : setRegisterValues({ ...registerValues, [name]: value });
    }

    const handleRegistration = async (type) => {
        const inputData = type === 'login' ? loginValues : registerValues;
        const action = type === 'login' ? loginUser : registerUser;
        await action(inputData);
    }

    useEffect(() => {
        if (registerIsSuccess && registerData) {
            toast.success(registerData.message || 'Sign Up successful')
        }
        if (loginIsSuccess && loginData) {
            toast.success(loginData.message || 'Log In successful')
        }
        if (registerError) {
            toast.error(registerData.message || 'Sign Up Failed')
        }
        if (loginError) {
            toast.error(loginData.message || 'Log In Failed')
        }
    }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);

    return (
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Tabs defaultValue="login">
                <TabsList>
                    <TabsTrigger value="login">Log In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Log In</CardTitle>
                            <CardDescription>
                                Enter your registered Email and password to Log In
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">Email</Label>
                                <Input type="email"
                                    name="email"
                                    value={loginValues.email}
                                    placeholder="Your Email"
                                    onChange={(e) => changeInputHandler(e, "login")}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Password</Label>
                                <Input type="password" name="password"
                                    value={loginValues.password}
                                    placeholder="Password"
                                    onChange={(e) => changeInputHandler(e, "login")}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={loginIsLoading} onClick={() => handleRegistration('login')}>
                                {loginIsLoading ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin'>Please Wait </Loader2>
                                    </>
                                ) : "Log In"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Create a new account and click Sign Up when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Name</Label>
                                <Input value={registerValues.name}
                                    type="text" name="name"
                                    placeholder="Your Name"
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">Email</Label>
                                <Input type="email"
                                    name="email"
                                    value={registerValues.email}
                                    placeholder="Your Email"
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Password</Label>
                                <Input type="password" name="password"
                                    value={registerValues.password}
                                    placeholder="Password"
                                    onChange={(e) => changeInputHandler(e, "signup")}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={registerIsLoading} onClick={() => handleRegistration('signup')}>
                                {
                                    registerIsLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin">Please wait</Loader2>
                                        </>
                                    ) : "Sign Up"
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login;