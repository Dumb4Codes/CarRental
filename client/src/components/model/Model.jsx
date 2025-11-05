import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/1970_chevrolet_camaro_pro_touring/scene.gltf"
  );

  const [direction, setDirection] = useState(1);
  const speed = 0.003; // rotation speed
  const [hovered, setHovered] = useState(false);

  // ✅ This ensures the model starts front-facing
  useEffect(() => {
    if (group.current) {
      // Flip the model 180° on Y so front faces camera
      group.current.rotation.y = Math.PI / 2;
    }
  }, []);

  useFrame(() => {
    if (group.current && !hovered) {
      group.current.rotation.y += direction * speed;

      // Reverse rotation at ±90° from the front
      if (group.current.rotation.y > Math.PI + Math.PI / 2) {
        setDirection(-1);
      } else if (group.current.rotation.y < Math.PI - Math.PI / 2) {
        setDirection(1);
      }
    }
  });
  return (
    <group
      ref={group}
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
      rotation={[0, Math.PI, 0]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[768.973, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.chrome}
            position={[-768.973, 1388.232, 210.45]}
          />
        </group>
        <group position={[768.973, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.material}
            position={[-768.973, 1388.232, 210.45]}
          />
        </group>
        <group position={[768.973, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.chrome}
            position={[-768.973, 1388.232, 210.45]}
          />
        </group>
        <group position={[768.973, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.silver}
            position={[-768.973, 1388.232, 210.45]}
          />
        </group>
        <group position={[659.151, -1388.234, -210.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.material_9}
            position={[-659.151, 1388.233, 210.618]}
          />
        </group>
        <group position={[659.151, -1388.234, -210.617]}>
          <group position={[-659.151, 1388.233, 210.618]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.silver}
            />
          </group>
        </group>
        <group position={[659.151, -1388.234, -210.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29.geometry}
            material={materials.material}
            position={[-659.151, 1388.233, 210.618]}
          />
        </group>
        <group position={[659.151, -1388.234, -210.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.silver}
            position={[-659.151, 1388.233, 210.618]}
          />
        </group>
        <group position={[687.631, -1388.234, -210.617]}>
          <group position={[-687.631, 1388.233, 210.618]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_37.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <group position={[850.473, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_40.geometry}
            material={materials.chrome}
            position={[-850.473, -1331.668, 223.891]}
          />
        </group>
        <group position={[850.473, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_43.geometry}
            material={materials.material}
            position={[-850.473, -1331.668, 223.891]}
          />
        </group>
        <group position={[850.473, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.chrome}
            position={[-850.473, -1331.668, 223.891]}
          />
        </group>
        <group position={[850.473, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.silver}
            position={[-850.473, -1331.668, 223.891]}
          />
        </group>
        <group position={[740.651, 1331.667, -224.058]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials.material_9}
            position={[-740.651, -1331.667, 224.057]}
          />
        </group>
        <group position={[740.651, 1331.667, -224.058]}>
          <group position={[-740.651, -1331.667, 224.057]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.silver}
            />
          </group>
        </group>
        <group position={[740.651, 1331.667, -224.058]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_59.geometry}
            material={materials.material}
            position={[-740.651, -1331.667, 224.057]}
          />
        </group>
        <group position={[740.651, 1331.667, -224.058]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_62.geometry}
            material={materials.silver}
            position={[-740.651, -1331.667, 224.057]}
          />
        </group>
        <group position={[775.273, 1331.667, -224.058]}>
          <group position={[-775.273, -1331.667, 224.057]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <group position={[-850.615, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_70.geometry}
            material={materials.chrome}
            position={[850.615, -1331.668, 223.891]}
          />
        </group>
        <group position={[-850.615, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_73.geometry}
            material={materials.material}
            position={[850.615, -1331.668, 223.891]}
          />
        </group>
        <group position={[-850.615, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_76.geometry}
            material={materials.chrome}
            position={[850.615, -1331.668, 223.891]}
          />
        </group>
        <group position={[-850.615, 1331.668, -223.891]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_79.geometry}
            material={materials.silver}
            position={[850.615, -1331.668, 223.891]}
          />
        </group>
        <group position={[-740.793, 1331.667, -224.058]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_82.geometry}
            material={materials.material_9}
            position={[740.793, -1331.667, 224.058]}
          />
        </group>
        <group position={[-740.793, 1331.667, -224.058]}>
          <group position={[740.793, -1331.667, 224.058]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_86.geometry}
              material={materials.silver}
            />
          </group>
        </group>
        <group position={[-740.793, 1331.667, -224.058]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_89.geometry}
            material={materials.material}
            position={[740.793, -1331.667, 224.058]}
          />
        </group>
        <group position={[-740.793, 1331.667, -224.058]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_92.geometry}
            material={materials.silver}
            position={[740.793, -1331.667, 224.058]}
          />
        </group>
        <group position={[-775.415, 1331.667, -224.058]}>
          <group position={[775.415, -1331.667, 224.058]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_95.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_96.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <group position={[-769.875, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_100.geometry}
            material={materials.chrome}
            position={[769.875, 1388.232, 210.45]}
          />
        </group>
        <group position={[-688.532, -1388.233, -210.617]}>
          <group position={[688.532, 1388.233, 210.617]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_103.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_104.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_105.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <group position={[-769.875, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_108.geometry}
            material={materials.material}
            position={[769.875, 1388.232, 210.45]}
          />
        </group>
        <group position={[-769.875, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_111.geometry}
            material={materials.chrome}
            position={[769.875, 1388.232, 210.45]}
          />
        </group>
        <group position={[-769.875, -1388.232, -210.45]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_114.geometry}
            material={materials.silver}
            position={[769.875, 1388.232, 210.45]}
          />
        </group>
        <group position={[-660.053, -1388.233, -210.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_117.geometry}
            material={materials.material_9}
            position={[660.053, 1388.233, 210.617]}
          />
        </group>
        <group position={[-660.053, -1388.233, -210.617]}>
          <group position={[660.053, 1388.233, 210.617]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_120.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_121.geometry}
              material={materials.silver}
            />
          </group>
        </group>
        <group position={[-660.053, -1388.233, -210.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_124.geometry}
            material={materials.material}
            position={[660.053, 1388.233, 210.617]}
          />
        </group>
        <group position={[-660.053, -1388.233, -210.617]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_127.geometry}
            material={materials.silver}
            position={[660.053, 1388.233, 210.617]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_130.geometry}
            material={materials.material}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_133.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_136.geometry}
            material={materials.material}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_139.geometry}
            material={materials.material}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_142.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_145.geometry}
            material={materials.material}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_148.geometry}
            material={materials.material}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_151.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[64.353, 385.967, -315.637]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_154.geometry}
            material={materials.material_9}
            position={[-64.353, -385.967, 315.637]}
          />
        </group>
        <group position={[253.866, -573.696, 326.647]}>
          <group position={[-253.866, 573.696, -326.647]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_157.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_158.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <group position={[329.341, -592.439, 236.979]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_161.geometry}
            material={materials.material}
            position={[-329.341, 592.439, -236.979]}
          />
        </group>
        <group position={[367.602, -662.183, -27.213]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_164.geometry}
            material={materials.material}
            position={[-367.602, 662.183, 27.213]}
          />
        </group>
        <group position={[605.768, -229.837, -58.373]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_167.geometry}
            material={materials.material}
            position={[-605.768, 229.837, 58.373]}
          />
        </group>
        <group position={[-33.339, -464.8, 391.955]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_170.geometry}
            material={materials.grey}
            position={[33.339, 464.8, -391.955]}
          />
        </group>
        <group position={[-360.254, -573.696, 326.647]}>
          <group position={[360.254, 573.696, -326.647]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_173.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_174.geometry}
              material={materials.material}
            />
          </group>
        </group>
        <group position={[-284.78, -592.439, 236.979]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_177.geometry}
            material={materials.material}
            position={[284.78, 592.439, -236.979]}
          />
        </group>
        <group position={[-246.518, -662.183, -27.213]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_180.geometry}
            material={materials.material}
            position={[246.518, 662.183, 27.213]}
          />
        </group>
        <group position={[-609.184, 385.967, -315.637]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_183.geometry}
            material={materials.material_9}
            position={[609.184, -385.967, 315.637]}
          />
        </group>
        <group position={[-938.303, 1313.067, 103.316]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_186.geometry}
            material={materials.material}
            position={[938.303, -1313.067, -103.316]}
          />
        </group>
        <group position={[445.71, 2284.368, 204.956]}>
          <group position={[-445.71, -2284.368, -204.956]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_189.geometry}
              material={materials.chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_190.geometry}
              material={materials.chrome}
            />
          </group>
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_193.geometry}
            material={materials.material}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_196.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_199.geometry}
            material={materials.material}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_202.geometry}
            material={materials.dash}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_205.geometry}
            material={materials.material}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_208.geometry}
            material={materials.chrome}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_211.geometry}
            material={materials.lamp}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_214.geometry}
            material={materials.material}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_217.geometry}
            material={materials.lamp}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_220.geometry}
            material={materials.checker}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_223.geometry}
            material={materials.r_glass}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_226.geometry}
            material={materials.d_glass}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_229.geometry}
            material={materials.material}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_232.geometry}
            material={materials.checker}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_235.geometry}
            material={materials.chrome}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_238.geometry}
            material={materials.d_glass}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_241.geometry}
            material={materials.d_glass}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, -73.652, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_244.geometry}
            material={materials.material}
            position={[0, 73.652, 28.064]}
          />
        </group>
        <group position={[0, -73.652, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_247.geometry}
            material={materials.material}
            position={[0, 73.652, 28.064]}
          />
        </group>
        <group position={[0, -148.829, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_250.geometry}
            material={materials.material}
            position={[0, 148.829, 27.631]}
          />
        </group>
        <group position={[0, -148.829, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_253.geometry}
            material={materials.material_9}
            position={[0, 148.829, 27.631]}
          />
        </group>
        <group position={[1219.912, -229.808, -58.373]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_256.geometry}
            material={materials.material}
            position={[-1219.912, 229.808, 58.373]}
          />
        </group>
        <group position={[0, -148.829, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_259.geometry}
            material={materials.chrome}
            position={[0, 148.829, 27.631]}
          />
        </group>
        <group position={[0, -148.829, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_262.geometry}
            material={materials.glass}
            position={[0, 148.829, 27.631]}
          />
        </group>
        <group position={[0, -148.829, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_265.geometry}
            material={materials.dash}
            position={[0, 148.829, 27.631]}
          />
        </group>
        <group position={[-363.864, 52.739, 171.646]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_268.geometry}
            material={materials.material}
            position={[363.864, -52.739, -171.646]}
          />
        </group>
        <group position={[-363.864, 52.739, 171.646]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_271.geometry}
            material={materials.wood}
            position={[363.864, -52.739, -171.646]}
          />
        </group>
        <group position={[-363.864, 52.739, 171.646]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_274.geometry}
            material={materials.material}
            position={[363.864, -52.739, -171.646]}
          />
        </group>
        <group position={[-363.864, 52.739, 171.646]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_277.geometry}
            material={materials.material}
            position={[363.864, -52.739, -171.646]}
          />
        </group>
        <group position={[-477.412, -91.605, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_280.geometry}
            material={materials.chrome}
            position={[477.412, 91.605, 0]}
          />
        </group>
        <group position={[-514.871, 332.104, 41.185]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_283.geometry}
            material={materials.chrome}
            position={[514.871, -332.104, -41.185]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_286.geometry}
            material={materials.material}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_289.geometry}
            material={materials.material}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_292.geometry}
            material={materials.material}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_295.geometry}
            material={materials.material}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_298.geometry}
            material={materials.chrome}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_301.geometry}
            material={materials.chrome}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_304.geometry}
            material={materials.chrome}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_307.geometry}
            material={materials.material}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_310.geometry}
            material={materials.material}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_313.geometry}
            material={materials.material}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_316.geometry}
            material={materials.material}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_319.geometry}
            material={materials.material_5}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[-363.864, 52.739, 171.646]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_322.geometry}
            material={materials.chrome}
            position={[363.864, -52.739, -171.646]}
          />
        </group>
        <group position={[-514.871, 332.104, 41.185]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_325.geometry}
            material={materials.material_5}
            position={[514.871, -332.104, -41.185]}
          />
        </group>
        <group position={[0, -148.829, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_328.geometry}
            material={materials.material}
            position={[0, 148.829, 27.631]}
          />
        </group>
        <group position={[0, -123.19, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_331.geometry}
            material={materials.material_5}
            position={[0, 123.19, 27.631]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_334.geometry}
            material={materials.black}
            position={[0, 123.413, 28.064]}
          />
        </group>
        <group position={[-477.412, -91.605, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_337.geometry}
            material={materials.body}
            position={[477.412, 91.605, 0]}
          />
        </group>
        <group position={[0, -123.413, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_340.geometry}
            material={materials.d_glass}
            position={[0, 123.413, 27.631]}
          />
        </group>
        <group position={[0, -127.549, -27.631]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_343.geometry}
            material={materials.material}
            position={[0, 127.549, 27.631]}
          />
        </group>
        <group position={[0, 2052.409, -22.99]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_346.geometry}
            material={materials.chrome}
            position={[0, -2052.409, 22.99]}
          />
        </group>
        <group position={[0, -73.652, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_349.geometry}
            material={materials.material}
            position={[0, 73.652, 28.064]}
          />
        </group>
        <group position={[0, -2339.519, -117.004]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_352.geometry}
            material={materials.body}
            position={[0, 2339.519, 117.004]}
          />
        </group>
        <group position={[0, -123.413, -28.064]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_355.geometry}
            material={materials.body}
            position={[0, 123.413, 28.064]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/1970_chevrolet_camaro_pro_touring/scene.gltf");
