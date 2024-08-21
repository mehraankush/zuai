
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'


const tabsData = [
    "All",
    "IA Example",
    "EE Example",
    "IO Example",
    "Tok Example",
]
export function TabsComponent() {
    return (
        <Tabs defaultValue="All" className="w-full mt-3 ">
            <TabsList className="flex gap-2">
                {
                    tabsData.map((tab, index) => (
                        <TabsTrigger
                            key={index}
                            value={tab}
                            className="text-slate-400"
                        >
                            {tab}
                        </TabsTrigger>
                    ))
                }
            </TabsList>
            <TabsContent value="account">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum quod quas qui asperiores eligendi libero, delectus error explicabo ipsam dolores. Provident, commodi? Error, possimus. Eveniet suscipit fuga aliquam enim.</p>
            </TabsContent>
            <TabsContent value="password">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea similique sed illo voluptate accusamus iusto maxime, amet repellat culpa velit exercitationem praesentium? Explicabo quas saepe quia est, fugit repellat ad?</p>
            </TabsContent>
        </Tabs>
    )
}
