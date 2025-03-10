import React, { useState } from "react";
import {productDropdown,ourstoryDropdown,userLoginDropdown,userLogoutDropdown} from "./Navitems";
import { Link} from "react-router-dom";
import "./Dropdown.css";

export const ProDropdown =()=>{
    const [dropdown,setDropdown] =useState(false);
    return <>
    <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
     onClick={()=> setDropdown(!dropdown)}>
        {
            productDropdown.map(item=>{
                return (
                    
                
              <li key={item.id} className={item.cName}
              onClick={()=> setDropdown(false)}>
                <Link to={item.path}>{item.title}</Link>
                  
              </li>
                
                )
            })
        }

    </ul>
        </>
    
      };

      export const OsDropdown =()=>{
        const [dropdown,setDropdown] =useState(false);
        return <>
        <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
         onClick={()=> setDropdown(!dropdown)}>
            {
                ourstoryDropdown.map(item=>{
                    return (
                        
                    
                  <li key={item.id} className={item.cName}
                  onClick={()=> setDropdown(false)}>
                    <Link to={item.path}>{item.title}</Link>
                      
                  </li>
                    
                    )
                })
            }
    
        </ul>
            </>
        
          };

          export const UsLoginDropdown =()=>{
            const [dropdown,setDropdown] =useState(false);
            return <>
            <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
             onClick={()=> setDropdown(!dropdown)}>
                {
                    userLoginDropdown.map(item=>{
                        return (
                            
                        
                      <li key={item.id} className={item.cName}
                      onClick={()=> setDropdown(false)}>
                        <Link to={item.path}>{item.title}</Link>
                          
                      </li>

                        
                        )
                    })
                }
        
            </ul>
                </>
            
              };


              export const UsLogoutDropdown =()=>{
                const [dropdown,setDropdown] =useState(false);
                return <>
                <ul className={dropdown ? "product-submenu clicked" :"product-submenu"}
                 onClick={()=> setDropdown(!dropdown)}>
                    {
                        userLogoutDropdown.map(item=>{
                            return (
                                
                            
                          <li key={item.id} className={item.cName}
                          onClick={()=> setDropdown(false)}>
                            <Link to={item.path}>{item.title}</Link>
                              
                          </li>
                            
                            )
                        })
                    }
            
                </ul>
                    </>
                
                  };

