import * as THREE from 'three'

import Experience from '../Experience.js'
import Room from './Room.js'

export default class PaintingRoom extends Room
{
    constructor() 
    {
        super();
        this.experience = new Experience()
        this.renderer = this.experience.renderer
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.PaintingRoomModel
        this.background = 'background/paint_bg.png';

        this.centerPosition = new THREE.Vector3(0, -1, 8)
        this.rightPosition = new THREE.Vector3(8, -1, 8)
        this.leftPosition = new THREE.Vector3(-8, -1, 8)
        this.scale = new THREE.Vector3(0.2, 0.2, 0.2)

        this.framePosition = new THREE.Vector3(0, 0, 0)
        this.frameRotation = new THREE.Vector3(0, Math.PI * 0.5, 0)

        this.setModel()
    }

    setModel()
    {
        this.model = this.resource.scene
        console.log(this.model)

        this.model.scale.set(0, 0, 0)
        this.model.rotation.y = Math.PI * 0.25
        this.model.rotation.x = -Math.PI * 0.1


        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                // child.material.transparent = true
                // child.material.opacity = 0.3
            }
        })

        this.scene.add(this.model)
    }
    // getSelectables()
    // {
    //     return this.model.children.filter((child) =>
    //     {
    //         if(child.name.includes('selectable'))
    //         {
    //             return true
    //         }
    //     })
    // }
}