import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Dashboard = () => {
    return (
        <div className='grid gap-6 grid-cols-1 sm:grid-co md:grid-cols-3 lg:grid-cols-4'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Total Enrollments
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}

export default Dashboard