import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    });
    const [registerValues, setRegisterValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        type === "login" ? setLoginValues({ ...loginValues, [name]: value }) : setRegisterValues({ ...registerValues, [name]: value });
    }

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
                            <Button>Save changes</Button>
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
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login;